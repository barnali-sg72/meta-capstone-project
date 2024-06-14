import CallToAction from "./CallToAction";
import CustomerRatings from "./CustomerRatings";
import Specials from "./Specials";
import About from "./About";

function HomePage() {
    return (
        <section className="home">
            <CallToAction/>
            <Specials/>
            <CustomerRatings/>
            <About/>
        </section>
    )
}

export default HomePage;