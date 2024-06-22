import { useNavigate } from "react-router-dom";
import food from "../images/restauranfood.jpg"

function CallToAction() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/bookingPage");
    }
    
    return (
        <section className="hero bg-green">
            <article>
                <h1 className="yellow">Little Lemon</h1>
                <h2 className="white">Chicago</h2>
                <p>
                    Welcome to our Little Lemon restaurant. Indulge in a culinary journey crafted 
                    by our expert chefs. Savor exquisite dishes in an ambiance of sophistication 
                    and style. Make your reservation now.
                </p>
                <button className="bg-yellow" aria-label="Reserve a table" onClick={handleClick}>Reserve a table</button>
            </article> 
            <img src={food} alt="food"></img>                
        </section>
    )
}

export default CallToAction;