
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav.js'
import Routing from './components/Routing.js'

import Homepage from './components/little-lemon-pages/HomePage.js'
import About from './components/little-lemon-pages/About'
import Reservation from './components/little-lemon-pages/BookingPage'
import Order from './components/little-lemon-pages/Order'
import Login from './components/little-lemon-pages/Login'
import Confirmation from './components/little-lemon-pages/Confirmation'

function App() {

  // <Route  path="/" element={<Homepage />} />
  
  // <Route path="/about" element={<About />} />

  // <Route path="/reservations" element={<Reservation />} />

  // <Route path="/order" element={<Order />} />
  // <Route path="/login" element={<Login />} />

  // <Route path="/confirmation" element={<Confirmation />} />



// return routes;

  return (
    <>

      <Nav />
      <Routing />
      <Footer />

    </>

  );
}

export default App;
