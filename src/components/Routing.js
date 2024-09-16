
import { Routes, Route } from "react-router-dom";
import Homepage from '../components/little-lemon-pages/HomePage'
import About from '../components/little-lemon-pages/About'
// import Reservation from '../components/little-lemon-pages/BookingPage'
import Reservation from '../components/little-lemon-pages/BookingFormReserve'
import Order from '../components/little-lemon-pages/Order'
import Login from '../components/little-lemon-pages/Login'
import Confirmation from '../components/little-lemon-pages/Confirmation'
import Specials from "./little-lemon-sections/heading-pages/Specials";
import BookingFornContactAndPayment from "./little-lemon-pages/BookingFornContactAndPayment";


export default function Routing() {
    return (
      <Routes>
        <Route  path="/" element={<Homepage />} />
  
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />

        <Route path="/reservations" element={<Reservation />} />
        <Route path="/bookingForContact" element={<BookingFornContactAndPayment />} />

        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
  
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    );
  }
  