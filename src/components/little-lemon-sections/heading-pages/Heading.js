
import { Link } from "react-router-dom";

export default function Heading(params) {

    return <>
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">
                    With two smokers to prep meaty St. Louis-style and baby back ribs, tender brisket, and apple-and-oak-smoked pulled pork, 
                    this destination in the South Chicago neighborhood of Irving Park delivers barbecue with nods to Kansas City, Missouri, and Memphis, Tennessee. 
                    During the pandemic, owner expanded takeout and outdoor dining options, including a patio in the former parking lot.
                    </p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img style={{borderRadius:'10px'}} src={require('../../../images/main-res.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>
    </>

}