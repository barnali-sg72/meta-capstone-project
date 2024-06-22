import BookingForm from "./BookingForm";
import image1 from "../images/restaurant.jpg";
import image2 from "../images/restaurant1.jpg";
import image3 from "../images/restaurant2.jpg";
import { useState } from "react";
import { useFormik } from "formik";

function BookingPage({availableTimes, dispatch, submitForm}) {
    
    const [bookingData, setBookingData] = useState({
        customerName: "",
        date: "",
        time: "",
        guests: 0,
        occasion: "",
        area: ""
    })
    
    const handleChange = (e) => {
        let name = e.currentTarget.name;
        let val = e.currentTarget.value;
        setBookingData({...bookingData, [name]: val})
        if (name === "date") {
            dispatch(val);
        } 
    }

    const handleDateChange = (e) => {
        let name = e.currentTarget.name;
        let val = e.currentTarget.value;
        if (name === "date") {
            dispatch(val);
        } 
    }

    /*const onSubmit = (e) => {
        e.preventDefault();
        submitForm(bookingData);
    }*/

    return (
        <section className="booking bg-green">
            <div className="head">
                <span>
                    <h1 className="yellow">Little Lemon</h1>
                    <h2 className="white">Chicago</h2>
                    <p className="white">
                        Welcome to our table reservation system. 
                        We are thrilled to have you here. Booking a table at our restaurant is quick and easy. 
                        Simply select your preferred date, time, and party size, and we'll take care of the rest. 
                        If you have any special requests or need assistance, don't hesitate to reach out. 
                        Our team is here to ensure you have an unforgettable dining experience.
                    </p>
                </span>
                <img src={image1} alt="image1"/>
            </div>           
            <BookingForm bookingData={bookingData} availableTimes={availableTimes} 
                handleDateChange={handleDateChange} submitForm={submitForm}/>
        </section>
    )
}

export default BookingPage;