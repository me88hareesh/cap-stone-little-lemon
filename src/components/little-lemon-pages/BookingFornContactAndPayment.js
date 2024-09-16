
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

export default function BookingFornContactAndPayment(props) {

    let btnStyles = {
        width: '200px',
        height: '30px'
    }
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [creditCardNo, setCreditCardNumber] = useState("");
    const [otp, setOtp] = useState("");


    const location = useLocation();
    const { from } = location.state;
    let primaryData = from;
    let contactData = {
        firstName: fName,
        lstName: lName,
        email: email,
        contact: tel
    }
    console.log(from);
    // function handleDateChange(e) {
    //   setDate(e.target.value);

    //   var stringify = e.target.value;
    //   const date = new Date(stringify);

    //   props.updateTimes(date);

    //   setFinalTime(props.availableTimes?.map((times) => <option>{times}</option>));
    // }

    return (
        <form className="reservation-form">
            <div style={{ border: '2px solid wheat', fontSize: '20px', backgroundColor: 'wheat' }}>
                <p><b>We always have a seat for your !!!</b>
                    <br></br>
                    <b style={{color:"green"}}>Confirm your booking.</b>
                </p>

            </div>
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input
                    type="text"
                    id="fName"
                    style={btnStyles}
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input
                    type="text"
                    id="lName"
                    style={btnStyles}
                    placeholder="Last Name"
                    minLength={2}
                    maxLength={50}
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input
                    type="email"
                    id="email"
                    style={btnStyles}
                    placeholder="Email"
                    value={email}
                    required
                    minLength={4}
                    maxLength={200}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input
                    type="tel"
                    id="phonenum"
                    style={btnStyles}
                    placeholder="(xxx)-xxx-xxxx"
                    value={tel}
                    required
                    minLength={10}
                    maxLength={25}
                    onChange={(e) => setTel(e.target.value)}
                ></input>
            </div>


            <div>
                <br></br>
                <Link className="action-button" to="/confirmation" state={{ from: { primaryData, contactData } }} >
                    Confirm</Link>

            </div>
        </form>
    );
}
