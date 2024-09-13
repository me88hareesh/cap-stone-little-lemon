
import { Link } from "react-router-dom";
import About from "./little-lemon-pages/About";
import BookingPage from "./little-lemon-pages/BookingPage";
import Order from "./little-lemon-pages/Order";
import Login from "./little-lemon-pages/Login";
import { Routes, Route } from "react-router-dom";


export default function Navigation(props) {
    return (
        <menu className={`navbar-menu ${props.device}`}>
            {props.device === "mobile" ? (
                ""
            ) : (
                <Link to="/">
                    <img
                        src={require("../icons_assets/Logo .svg")}
                        alt="Little Lemon logo"
                        className="nav-image"
                    ></img>
                </Link>
            )}
            <Link className="hover-effect" to="/">
                <h1>Home</h1>
            </Link>
            <Link className="hover-effect" href='' to="/about">
                <h1>About</h1>
            </Link>
            <a
                className="hover-effect"
                href=''
                //   href={require("../assets/menu.webp")}
                target="_blank"
                rel="noreferrer"
            >
                <h1>Menu</h1>
            </a>
            <Link className="hover-effect" to="/reservations">
                <h1>Reservations</h1>
            </Link>
            <Link className="hover-effect" to="/order">
                <h1>Order</h1>
            </Link>
            <Link className="hover-effect" to="/login">
                <h1>Login</h1>
            </Link>

            {/* <Routes>
                <Route path="about" element={<About />}></Route>
                <Route path="reservations" element={<BookingPage />}></Route>
                <Route path="order" element={<Order />}></Route>
                <Route path="login" element={<Login />}></Route>

            </Routes> */}
        </menu>
    );
}
