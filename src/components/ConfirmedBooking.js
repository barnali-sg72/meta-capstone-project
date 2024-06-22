import image1 from "../images/restaurant.jpg";
import { getTime } from "./utils";

function ConfirmedBooking({formData}) {

    return (
        <section className="confirmation bg-green">
            <section className="head">
                <span>
                    <h1 className="yellow">Little Lemon</h1>
                    <h2 className="white">Chicago</h2>    
                    <p className="white">
                        Thank you for choosing Little Lemon! We are looking forward to welcoming you to our restaurant.
                        If you need to make any changes or have any questions, please do not hesitate to contact us.
                    </p>                
                </span>
                <img src={image1} alt="image1"/>
            </section>  
            <section className="message white">
                <h2>Your reservation is confirmed!!</h2>
                <h6 className="section-title">Confirmation No. XXXXXX</h6>
                <h6 className="section-title">SUMMARY</h6>
                <summary>
                    <span>NAME:</span><span>{formData.customerName}</span>
                    <span>WHEN:</span><span>{formData.date} {getTime(formData.time)}</span>
                    <span>OCCASION:</span><span>{formData.occasion}</span>
                    <span>AREA:</span><span>{formData.area}</span>
                    <span>GUESTS:</span><span>{formData.guests}</span>
                </summary>
            </section>  
            <section className="terms white">
                <h6 className="section-title">TERMS AND CONDITIONS</h6>
                <ul>
                    <li>Table is reserved for 2 hours.</li>
                    <li>We will keep your table for 15 minutes after the scheduled time.</li>
                    <li>Failure to show up within that 15 minutes will result in cancellation.</li>                    
                </ul>
            </section>       
            
        </section>
    )
}

export default ConfirmedBooking;