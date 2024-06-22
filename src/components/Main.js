import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../api";
import ConfirmedBooking from "./ConfirmedBooking";
import ReservationsPage from "./ReservationsPage";
import About from "./About";

//let script = null;
/* reducer */
export function updateTimes(state, date) {
    const dateobj = new Date(date);
    state = fetchAPI(dateobj);
    return state;
}

export function initializeTimes()  {
    //let fetchAPI = window.fetchAPI;
    return fetchAPI(new Date());
    //return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function Main() {
    
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [formData, setFormData] = useState({});
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();


     useEffect(() => {
        //localStorage.clear();
        const data = localStorage.getItem("RESERVATIONS");
        if (data != undefined && data != null) {            
            const reslist = JSON.parse(data);
            console.log(reslist);
            if (reslist.length > 0) {
                setReservations(reslist);
            }
        }
    }, []);

    const submitForm = (formData) => {
        console.log(formData);
        setFormData(formData);
        submitAPI(formData);
        let reslist = reservations;
        reslist.push(formData);
        localStorage.setItem("RESERVATIONS", JSON.stringify(reslist));
        setReservations(reslist);
        /*setReservations((prev) => {
            return [...prev, formData];
        })
        localStorage.setItem("RESERVATIONS", JSON.stringify(reservations));*/
        navigate("/bookingConfirmation");
    }

    const deleteReservation = (ind) => {
        let list = reservations;
        list.splice(ind, 1);
        setReservations(list);
        localStorage.setItem("RESERVATIONS", JSON.stringify(reservations));
        navigate("/reservations");
    }

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/reservations" element={<ReservationsPage reservations={reservations}
                        deleteReservation={deleteReservation}/>}></Route>
                    <Route path="/bookingPage" element={<BookingPage availableTimes={availableTimes} 
                        dispatch={dispatch} submitForm={submitForm}/>}>
                    </Route>
                    <Route path="/bookingConfirmation" element={<ConfirmedBooking formData={formData}/>}></Route>
                </Routes>  
            </main>
        </>
    )
}

export default Main;