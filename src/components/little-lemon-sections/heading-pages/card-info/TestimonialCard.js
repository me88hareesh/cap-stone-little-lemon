import Star from '../../../../icons_assets/star.png';
// import starRating from '../../../../icons_assets/testimonal-users/three-stars-icon-vector-260nw-1316819480.jpg'
export default function TestimonialCard(props) {
    return (
        <article style={{borderRadius:'10px'}} className="testimonial-card">
            <img src={props.image} alt="delivery Icon"></img>
            &nbsp;
            {/* <img src={starRating} alt="star rating"></img> */}
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}