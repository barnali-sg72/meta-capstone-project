import image1 from "../images/Mario and Adrian A11.jpg"
import image2 from "../images/Mario and Adrian b11.jpg"

function About() {
    return (
        <section className="about bg-green">
            <article>
                <h1 className="yellow">Little Lemon</h1>
                <h2 className="white">Chicago</h2>
                <p className="white">
                    Our Little Lemon restaurant was founded in 2005 by Adrian and Mario 
                    who were passionate about creating a unique dining experience in Chicago. 
                    Our journey began with a love for fresh, locally-sourced ingredients. 
                    We believe in the power of good food to bring people together. 
                    Our farm-to-table approach ensures that every dish we serve is not 
                    only delicious but also sustainable and eco-friendly. We are committed 
                    to supporting local farmers and using organic ingredients whenever 
                    possible. With a passion for innovation and a deep respect for tradition, 
                    our chefs craft each dish with precision and creativity.
                </p>
            </article> 
            <div className="images"> 
                <img src={image1} alt="image1"/>
                <img src={image2} alt="image2"/>
            </div>
                          
        </section>
    )
}

export default About;