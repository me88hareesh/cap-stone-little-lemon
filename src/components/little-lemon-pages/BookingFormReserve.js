

// import { useState } from "react";
// import { Link } from 'react-router-dom';

// export default function BookingFormReserve(props) {
//     // const [fName, setFName] = useState("");
//     // const [lName, setLName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [tel, setTel] = useState("");
//     let btnStyles = {
//         width: '200px',
//         height: '30px'
//     }
//     const [people, setPeople] = useState(1);
//     const [date, setDate] = useState("");
//     const [occasion, setOccasion] = useState("");
//     const [preferences, setPreferences] = useState("");
//     // const [comments, setComments] = useState("");

//     let availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//     const [finalTime, setFinalTime] = useState(
//         availableTimes?.map((times) => <option key={times}>{times}</option>)
//     );



//     function handleDateChange(e) {
//         setDate(e.target.value);
//         var stringify = e.target.value;
//         const date = new Date(stringify);
//         // props.updateTimes(date);
//         setFinalTime(availableTimes?.map((times) => <option>{times}</option>));
//     }

//     const formik = useFormik({
//         initialValues: {
//             date: '',
//             time: '',
//             occasion: '',
//             people:0,
//             preferences:''
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });

//     return (
//         <form className="reservation-form">
//             <div style={{ border: '2px solid wheat', fontSize: '20px', backgroundColor: 'wheat' }}>
//                 <p><b>We always have a seat for your !!!</b>
//                     <br></br>
//                     <b style={{ color: "green" }}>Book your table reservation below.</b>
//                 </p>

//             </div>
//             <div>
//                 <label htmlFor="date">Select Date</label> <br></br>
//                 <input
//                     type="date"
//                     id="date"
//                     style={btnStyles}
//                     required
//                     value={date}
//                     onChange={handleDateChange}
//                 ></input>
//             </div>

//             <div>
//                 <label htmlFor="time">Select Time</label> <br></br>
//                 <select id="time" key={finalTime} style={btnStyles} required >
//                     {finalTime}
//                 </select>
//             </div>


//             <div>
//                 <label htmlFor="occasion">Occasion</label> <br></br>
//                 <select
//                     id="occasion"
//                     value={occasion}
//                     style={btnStyles}
//                     onChange={(e) => setOccasion(e.target.value)}
//                 >
//                     <option>None</option>
//                     <option>Birthday</option>
//                     <option>Anniversary</option>
//                     <option>Engagement</option>
//                     <option>Other</option>
//                 </select>
//             </div>

//             <div>
//                 <label htmlFor="people">Number of People</label> <br></br>
//                 <input
//                     type="number"
//                     id="people"
//                     style={btnStyles}
//                     placeholder="Number of People"
//                     value={people}
//                     required
//                     min={1}
//                     max={100}
//                     onChange={(e) => setPeople(e.target.value)}
//                 ></input>
//             </div>

//             <div>
//                 <label htmlFor="preferences">Seating preferences</label> <br></br>
//                 <select
//                     id="preferences"
//                     value={preferences}
//                     onChange={(e) => setPreferences(e.target.value)}
//                 >
//                     <option>None</option>
//                     <option>Indoors</option>
//                     <option>Outdoor</option>
//                 </select>
//             </div>

//             <div>
//                 <br></br>
//                 <small>
//                     <p>
//                         Note: You cannot edit your reservation after submission. Please
//                         double-check your answer before submitting your reservation request.
//                     </p>
//                 </small>
//                 <Link className="action-button" to="/bookingForContact" state={{ from: { occasion, preferences, people, date } }}>
//                     Book Table
//                 </Link>
//             </div>
//         </form>
//     );
// }




import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';


export default function BookingFormReserve(props) {

    let navigate = useNavigate();

    let btnStyles = {
        width: '200px',
        height: '30px'
    }
    const [people, setPeople] = useState(1);
    const [diningDate, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");

    let minDate = new Date().toISOString().split("T")[0];
    // let availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    let availableTimes = [];

    function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        // const date = new Date(stringify);
        setFinalTime(availableTimes?.map((times) => <option>{times}</option>));
    }

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        people: Yup.string().required("Required"),
        diningDate: Yup.string().required("Dining date is required"),
        occasion: Yup.string().required("Required").label("None"),
        preferences: Yup.string().required("Required")
    });

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            diningDate: "",
            time: '',
            occasion: "",
            people: 1,
            preferences: ""
        },

        validationSchema: DisplayingErrorMessagesSchema,

        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            // alert(values.finalTime);

            navigate("/bookingForContact", { state: { from: { occasion: values.occasion, preferences: values.preferences, people: values.people, date: values.diningDate, time: values.finalTime } } });
        },
    });

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    

    var result = fetchAPI(new Date());
    result.forEach(element => {
        availableTimes.push(element);
    });

    const [finalTime, setFinalTime] = useState(
        availableTimes?.map((times) => <option key={times}>{times}</option>)
    );


    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="reservation-form">

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
                    min={minDate}
                    id="diningDate"
                    style={btnStyles}
                    value={values.diningDate}
                    onChange={handleChange}
                    // onChange={(e) => {getLotDetails(e.target.value)}}
                    // onChange={(e)=>{
                //     // alert(values.diningDate)
                //     let timeStamp = Date.parse(e.target.value);
                //     var date = new Date(timeStamp);

                //     console.log(e);
                //   var result=  fetchAPI(date)
                //   result.forEach(element => {
                //     alert(element);
                //     availableTimes.push(element)
                //   });

                // //   handleChange();

                // //   console.log(res);
                // }}
                ></input>
                {errors.diningDate && (
                    <p className="input-feedback">{errors.diningDate}</p>
                )}

            </div>

            <div>
                <label htmlFor="finalTime">Select Time</label> <br></br>
                <select id="finalTime"
                    value={values.finalTime}
                    style={btnStyles}
                    required
                    onChange={handleChange}
                >
                    {finalTime}
                </select>
            </div>


            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select
                    id="occasion"
                    value={values.occasion}
                    style={btnStyles}
                    onChange={handleChange}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>

                {errors.occasion && (
                    <p className="input-feedback">{errors.occasion}</p>
                )}
            </div>

            <div>
                <label htmlFor="people">Number of guests</label> <br></br>
                <input
                    type="number"
                    id="people"
                    style={btnStyles}
                    placeholder="Number of People"
                    value={values.people}
                    min={1}
                    onChange={handleChange}
                ></input>

                {errors.people && (
                    <p className="input-feedback">{errors.people}</p>
                )}

            </div>

            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select
                    id="preferences"
                    style={btnStyles}
                    value={values.preferences}
                    onChange={handleChange}
                >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor</option>
                </select>
                {errors.preferences && (
                    <p className="input-feedback">{errors.preferences}</p>
                )}
            </div>



            <div>
                <button className="action-button" type="submit">Book Table</button>
                &nbsp;


                <button className="action-button" type="button" onClick={{} = () => {
                    if (window.confirm("Are you sure want to cancel booking ?") == true) {
                        navigate('/')
                    }
                }}>Cancel</button>

            </div>
        </form>
    )
}

