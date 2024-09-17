
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function BookingFornContactAndPayment(props) {

    let navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state;
    let primaryData = from;

    console.log(from);

    let btnStyles = {
        width: '200px',
        height: '30px'
    }
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [creditCardNo, setCreditCardNumber] = useState("");
    // const [otp, setOtp] = useState("");

    let contactData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: tel
    }

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        tel: Yup.string().required("Required"),
        creditCardNo: Yup.string().required("Required"),
        // otp: Yup.string().required("Required")
    });



    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            firstName: "",
            lastName: '',
            tel: "",
            creditCardNo: "",
            // otp: ""
        },

        validationSchema: DisplayingErrorMessagesSchema,

        onSubmit: values => {
            contactData={
                firstName:values.firstName,
                lastName:values.lastName,
                contact:values.tel,
                email:values.email
            }
            navigate("/confirmation", { state: { from: { primaryData:primaryData, contactData:contactData } } });
        },
    });




    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="reservation-form">
            <div style={{ border: '2px solid wheat', fontSize: '20px', backgroundColor: 'wheat' }}>
                <p><b>We always have a seat for your !!!</b>
                    <br></br>
                    <b style={{ color: "green" }}>Confirm your booking.</b>
                </p>

            </div>
            <div>
                <label htmlFor="fName">First Name</label> <br></br>

                <input
                    type="text"
                    id="firstName"
                    style={btnStyles}
                    placeholder="First Name"
                    minLength={2}
                    maxLength={50}
                    value={values.firstName}
                    onChange={handleChange}
                ></input>
                {errors.firstName && (
                    <p className="input-feedback">{errors.firstName}</p>
                )}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label> <br></br>
                <input
                    type="text"
                    id="lastName"
                    style={btnStyles}
                    placeholder="Last Name"
                    minLength={2}
                    maxLength={50}
                    value={values.lastName}
                    onChange={handleChange}
                ></input>
                {errors.lastName && (
                    <p className="input-feedback">{errors.lastName}</p>
                )}
            </div>

            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input
                    type="email"
                    id="email"
                    style={btnStyles}
                    placeholder="Email"
                    value={values.email}
                    minLength={4}
                    maxLength={200}
                    onChange={handleChange}
                ></input>
                {errors.email && (
                    <p className="input-feedback">{errors.email}</p>
                )}
            </div>

            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input
                    type="text"
                    id="tel"
                    style={btnStyles}
                    placeholder="(xx)-xxxxxxxxxx"
                    value={values.tel}
                    minLength={10}
                    maxLength={12}
                    onChange={handleChange}
                ></input>
                 {errors.tel && (
                    <p className="input-feedback">{errors.tel}</p>
                )}
            </div>

            <div>
                <label htmlFor="creditcard">Credit Card Number</label> <br></br>
                <input
                    type="text"
                    id="creditCardNo"
                    style={btnStyles}
                    placeholder="credit card number"
                    value={values.creditCardNo}
                    minLength={16}
                    maxLength={16}
                    onChange={handleChange}
                ></input>
                 {errors.creditCardNo && (
                    <p className="input-feedback">{errors.creditCardNo}</p>
                )}
            </div>


            <div>
                
                <div>
                    <button className="action-button" type="submit">Confirm</button>
                    &nbsp;
                    <button className="action-button"  type="button" onClick={{}=()=>{
                        if (window.confirm("Are you sure want to cancel booking ?") == true) {
                            // text = "You pressed OK!";
                            navigate('/')

                          } 
                }}>Cancel</button>
                </div>

            </div>
        </form>
    );
}
