import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

// import logo from "../assets/logo.svg";
import logo  from "../assets/LibertumColor.png";


import cross from "./assets/cross.svg";
import home from "./assets/home.svg";
import whitepaper from "./assets/whitepaper.svg";
import contacts from "./assets/contacts.svg";
import bepart from "./assets/bepart.svg";
import pdf from "../assets/LBM-whitepaper.pdf";
import { networks } from "../networks";
import "./NavBar.scss";

export default function NavBar() {

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };


  return (
    <>
      <nav className="nav_items">
        <img src={logo} alt="Libertum Logo" className="logo" />

        <div className={`mobile-menu-icon ${mobileMenuActive ? "active" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`menu_items ${mobileMenuActive ? "active" : ""}`}>
          <li className="menu-li_items">
            <Link to="home" smooth={true} duration={500} className="menu-a_items">
              Home
            </Link>
          </li>
          <li className="menu-li_items">
            <a
              href="/whitepaper.pdf" // Cambia la ruta al PDF correcta
              target="_blank"
              rel="noopener noreferrer"
              download="LBM-whitepaper.pdf"
              className="menu-a_items"
            >
              Whitepaper
            </a>
          </li>
          <li className="menu-li_items">
            <Link to="subscribe" smooth={true} duration={1000} className="menu-a_items">
              Contact
            </Link>
          </li>
          <li className="menu-li_items">
            <a href="/marketplace" rel="noreferrer" className="menu-a_items">
              Marketplace
            </a>
          </li>
          <li className="menu-li_items">
            <a href="/signin" rel="noreferrer" className="sign-in">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
