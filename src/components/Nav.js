
import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../icons_assets/🦆 icon _hamburger menu.svg";
import Close from "../icons_assets/close.jpg";
// import LittleLemonLogo from '../icons_assets/Logo.svg'

export default function Nav(params) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (

    <nav>
      <nav className="burger">

        {/* <img  className="nav-image" src={LittleLemonLogo} alt="logo"></img> */}
        {/* <img
          src={require("../icons_assets/little-lemon-logo.jpg")}
          alt="Little Lemon logo"
        ></img> */}

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} width={50} height={50} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>

  );
}
