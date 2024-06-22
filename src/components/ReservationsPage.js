import CallToAction from "./CallToAction";
import { getTime } from "./utils";
import { FaTrash } from "react-icons/fa6";

function ReservationsPage({reservations, deleteReservation}) {
    return (
        <section className="reservations">
            <CallToAction />
            <section className="list bg-green white">
                <h2>Reservations</h2>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Occasion</th>
                        <th>Guests</th>
                        <th>Area</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                    { reservations.length > 0 ? reservations.map((res, ind) => (
                        <tr key={ind}>
                            <td>{res.customerName}</td>
                            <td>{res.date}</td>
                            <td>{getTime(res.time)}</td>
                            <td>{res.occasion}</td>
                            <td>{res.guests}</td>
                            <td>{res.area}</td>
                            <td><FaTrash className="faicon" aria-label="Delete Reservation" 
                                onClick={() => deleteReservation(ind)}/></td>
                        </tr>
                    )) : <tr>
                            <td colSpan={7}>There are no reservations to display</td>
                        </tr>
                    }                    
                   </tbody> 
                </table>
            </section>
        </section>
    )
}

export default ReservationsPage;