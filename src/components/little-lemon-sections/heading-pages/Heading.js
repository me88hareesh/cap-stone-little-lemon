
import { Link } from "react-router-dom";

export default function Heading(params) {

    return <>
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">
                    Located in Chicago’s vibrant South Loop and just a short walk from McCormick Place, 
                    Little Lemon is an exquisite Italian restaurant perfect for private events. 
                    Whether you're planning a corporate meeting, a milestone birthday, 
                    or an intimate family gathering, our cozy atmosphere will instantly make you feel at home.
                    </p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../icons_assets/restaurant.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>
    </>

}