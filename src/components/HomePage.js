import CallToAction from "./CallToAction";
import CustomerRatings from "./CustomerRatings";
import Specials from "./Specials";
import About from "./About";

function HomePage() {
    return (
        <div className="home">
            <CallToAction/>
            <Specials/>
            <CustomerRatings/>
            <About/>
        </div>
    )
}

export default HomePage;