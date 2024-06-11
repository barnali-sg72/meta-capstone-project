import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function Main() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/bookingPage" element={<BookingPage />}></Route>
                </Routes>  
            </main>
        </>
    )
}

export default Main;