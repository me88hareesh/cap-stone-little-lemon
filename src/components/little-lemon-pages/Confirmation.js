import { Link, useLocation } from 'react-router-dom'

export default function Confirmation(params) {

    const location = useLocation();
    const { from } = location.state
    console.log(from.primaryData);
    console.log(from.contactData);
    // function handleDateChange(e) {

    return (<>
        <form  className="confirmation-form">
            <div style={{ border: '2px solid wheat', fontSize: '20px', backgroundColor: 'wheat' }}>
                <p><b>We always have a seat for your !!!</b>
                    <br></br>
                    <b style={{ color: "green" }}>Please find your booking summary.</b>
                </p>

            </div>
            <div style={{border:'1px solid wheat',width:'500px',margin:'0 auto',backgroundColor:'wheat',marginBottom:'1em',textAlign:'left',paddingLeft:'25%'}}>
            <div>
                <label htmlFor="fName">Date:</label> <span><b>{from.primaryData.date}</b></span>
            </div>
            <div>
                <label htmlFor="time">Time:</label> <span><b>{from.primaryData.time}</b></span>
            </div>

            <div>
                <label htmlFor="fName">No of guests:</label> <span><b>{from.primaryData.people}</b></span>

            </div>


            <div>
                <label htmlFor="fName">Name:</label> <span><b>{from.contactData.firstName + " " + from.contactData.lstName}</b></span>
            </div>

            <div>
                <label htmlFor="email">Email</label> <span><b>{from.contactData.email}</b></span> <br></br>

            </div>

            <div>
                <label htmlFor="phonenum">Phone Number</label> <span><b>{from.contactData.contact}</b></span> <br></br>

            </div>
                </div>

            <div>
                <br></br>
                <Link className="action-button" to="/">
                    Go to Home</Link>

            </div>
        </form>
    </>)
}