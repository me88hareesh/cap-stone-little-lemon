

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function BookingFormReserve(props) {
    // const [fName, setFName] = useState("");
    // const [lName, setLName] = useState("");
    // const [email, setEmail] = useState("");
    // const [tel, setTel] = useState("");
    let btnStyles = {
        width: '200px',
        height: '30px'
    }
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    // const [comments, setComments] = useState("");

    let availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const [finalTime, setFinalTime] = useState(
        availableTimes?.map((times) => <option key={times}>{times}</option>)
    );



    function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        // props.updateTimes(date);
        setFinalTime(availableTimes?.map((times) => <option>{times}</option>));
    }

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            occasion: '',
            people:0,
            preferences:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className="reservation-form">
            <div style={{ border: '2px solid wheat', fontSize: '20px', backgroundColor: 'wheat' }}>
                <p><b>We always have a seat for your !!!</b>
                    <br></br>
                    <b style={{ color: "green" }}>Book your table reservation below.</b>
                </p>

            </div>
            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input
                    type="date"
                    id="date"
                    style={btnStyles}
                    required
                    value={date}
                    onChange={handleDateChange}
                ></input>
            </div>

            <div>
                <label htmlFor="time">Select Time</label> <br></br>
                <select id="time" key={finalTime} style={btnStyles} required >
                    {finalTime}
                </select>
            </div>


            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select
                    id="occasion"
                    value={occasion}
                    style={btnStyles}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input
                    type="number"
                    id="people"
                    style={btnStyles}
                    placeholder="Number of People"
                    value={people}
                    required
                    min={1}
                    max={100}
                    onChange={(e) => setPeople(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor</option>
                </select>
            </div>

            <div>
                <br></br>
                <small>
                    <p>
                        Note: You cannot edit your reservation after submission. Please
                        double-check your answer before submitting your reservation request.
                    </p>
                </small>
                <Link className="action-button" to="/bookingForContact" state={{ from: { occasion, preferences, people, date } }}>
                    Book Table
                </Link>
            </div>
        </form>
    );
}
