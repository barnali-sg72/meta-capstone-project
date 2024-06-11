import food from "../images/restauranfood.jpg"

function CallToAction() {
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
                <button className="bg-yellow">Reserve a table</button>
            </article> 
            <img src={food} alt="food"></img>                
        </section>
    )
}

export default CallToAction;