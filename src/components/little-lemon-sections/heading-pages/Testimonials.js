
import TestimonialCard from './card-info/TestimonialCard'
import TestimonialCarousel from './TestimonialCarousel'
import person1 from '../../../icons_assets/testimonal-users/person1.jpg'
import person2 from '../../../icons_assets/testimonal-users/person2.jpg'
import person3 from '../../../icons_assets/testimonal-users/person3.jpg'


export default function Testimonials(params) {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard image={person1} name="User 1" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard image={person2} name="User 2" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard image={person3} name="User 3" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
                <TestimonialCard image={person2} name="User 4" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            </section>

            <section className="testimonials-carousel">
                <TestimonialCarousel />
            </section>
        </section>
    );
}