import logo from "../images/Logo1.png"

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-logo">
                    <img src={logo} height="300" width="200" alt="logo"/>
                </div>
                <div className="footer-item"> 
                    <h6 className="section-title">DOORMAT NAVIGATION</h6>
                    <ul>
                        <li className="lead-text"><a href="#">HOME</a></li>
                        <li className="lead-text"><a href="#">ABOUT</a></li>
                        <li className="lead-text"><a href="#">MENU</a></li>
                        <li className="lead-text"><a href="#">RESERVATIONS</a></li>
                        <li className="lead-text"><a href="#">ORDER ONLINE</a></li>
                        <li className="lead-text"><a href="#">LOGIN</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h6 className="section-title">CONTACT</h6>
                    <ul>
                        <li className="lead-text">Address</li>
                        <li className="lead-text">Phone</li>
                        <li className="lead-text">Email</li>
                    </ul>
                </div> 
                <div className="footer-item">
                    <h6 className="section-title">SOCIAL MEDIA LINKS</h6>
                    <ul>
                        <li className="lead-text"><a href="#">Facebook</a></li>
                        <li className="lead-text"><a href="#">LinkedIn</a></li>
                        <li className="lead-text"><a href="#">Twitter</a></li>
                        <li className="lead-text"><a href="#">Pinterest</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;