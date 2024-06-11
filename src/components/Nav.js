import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li className="lead-text"><Link to="/">HOME</Link></li>
                    <li className="lead-text"><Link to="/about">ABOUT</Link></li>
                    <li className="lead-text"><Link to="/menu">MENU</Link></li>
                    <li className="lead-text"><Link to="/bookingPage">RESERVATIONS</Link></li>
                    <li className="lead-text"><Link to="/orderOnline">ORDER ONLINE</Link></li>
                    <li className="lead-text"><Link to="/login">LOGIN</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;