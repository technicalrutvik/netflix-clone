import React, { useEffect, useState } from "react";
import "./Nav.css";
/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix logo"
      />
    </div>
  );
};
export default Navbar;
