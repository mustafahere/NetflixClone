import React, { useEffect, useRef } from "react";
import "../css/NavBar.css";
import logo from "../images/logo.png";
import { FiSearch, FiBell } from "react-icons/fi";

function NavBar() {
  const navRef = useRef(null);

  const changeLogo = () => {
    if (window.scrollY > 140) {
      navRef.current.style.backgroundColor = "#141414";
    } else {
      navRef.current.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLogo);

    return () => {
      window.removeEventListener("scroll", changeLogo);
    };
  }, []);

  return (
    <div className="navbar-main" ref={navRef}>
      <div className="nav-left">
        <img src={logo} className="logo" alt="Netflix Clone" />
        <p className="active">Home</p>
        <p>TV Shows</p>
        <p>Movies</p>
        <p>New & popular</p>
        <p>My List</p>
      </div>
      <div className="nav-right">
        <FiSearch size={25} color="white" />
        <FiBell size={25} color="white" />
      </div>
    </div>
  );
}

export default NavBar;
