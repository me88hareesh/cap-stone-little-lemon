
import { Routes, Route } from "react-router-dom";
import Homepage from '../components/little-lemon-pages/HomePage'
import About from '../components/little-lemon-pages/About'
import Reservation from '../components/little-lemon-pages/BookingPage'
import Order from '../components/little-lemon-pages/Order'
import Login from '../components/little-lemon-pages/Login'
import Confirmation from '../components/little-lemon-pages/Confirmation'



export default function Routing() {
    return (
      <Routes>
        <Route  path="/" element={<Homepage />} />
  
        <Route path="/about" element={<About />} />
  
        <Route path="/reservations" element={<Reservation />} />
  
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
  
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    );
  }
  