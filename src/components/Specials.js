import greekSalad from "../images/greek salad.jpg"
import bruschetta from "../images/bruschetta.png"
import lemonDessert from "../images/lemon dessert.jpg"
import { fa6 } from "@fortawesome/free-solid-svg-icons/fa6"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons"
import { MdOutlineMoped } from "react-icons/md";


function Specials() {
    return (
        <section className="specials">
            <div className="specials-title">
                <h2>Specials</h2>
                <button className="bg-yellow">Order Online</button>
            </div>
            <div className="card-list">
                <article className="specials-card bg-lightgrey">
                    <img src={greekSalad}/>
                    <div className="card-content">
                        <div className="card-header">
                            <h4>Greek Salad</h4>
                            <h4 className="highlight-text">$ 12.99</h4>
                        </div>
                        <p className="paragraph-text">
                            A classic Mediterranean dish that showcases the vibrant flavors and 
                            fresh ingredients typical of Greek cuisine.
                        </p>
                        <a role="button">
                            <span className="lead-text">Order for delivery</span>
                            <span><MdOutlineMoped size={20} className="icon"/></span>
                        </a>
                    </div>                    
                </article>
                <article className="specials-card bg-lightgrey">
                    <img src={bruschetta}/>
                    <div className="card-content">
                        <div className="card-header">
                            <h4>Bruschetta</h4>
                            <h4 className="highlight-text">$ 5.99</h4>
                        </div>
                        <p className="paragraph-text">
                            A traditional Italian appetizer that consists of grilled bread 
                            rubbed with garlic and topped with a variety of ingredients.
                        </p>
                        <a role="button">
                            <span className="lead-text">Order for delivery</span>
                            <span><MdOutlineMoped size={20} className="icon"/></span>
                        </a>
                    </div>                    
                </article>
                <article className="specials-card bg-lightgrey">
                    <img src={lemonDessert}/>
                    <div className="card-content">
                        <div className="card-header">
                            <h4>Lemon Dessert</h4>
                            <h4 className="highlight-text">$ 5:00</h4>
                        </div>
                        <p className="paragraph-text">
                            A rich and creamy dessert with a tangy lemon flavor
                        </p>
                        <a role="button">
                            <span className="lead-text">Order for delivery</span>
                            <span><MdOutlineMoped size={20} className="icon"/></span>
                        </a>
                    </div>                    
                </article>
            </div>

        </section>
    )
}

export default Specials;