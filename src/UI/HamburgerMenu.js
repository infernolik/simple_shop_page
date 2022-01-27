import React, { useContext } from "react";
import closeBtn from "../images/icon-close.svg";
import hamburgerContext from "../context/windowRezAndHamburger/hamburgerContext.js";

export default function HamburgerMenu() {
  const hamContext = useContext(hamburgerContext);
  const handleClick = (ev) => {
    if (ev.target.className === "closeHamburger") {
      window.document.body.style.overflow = "auto";
      hamContext.switchHam();
    }
  };
  return (
    <div
      className="hamburger-menu"
      style={hamContext.hamOpened ? styles : null}
    >
      <div className="hamburger-inner">
        <img
          src={closeBtn}
          className="closeHamburger"
          onClick={handleClick}
          alt="close_button"
        ></img>

        <ul className="hamburger-navList">
          <li className="list-item">
            <a href="#!">Collections</a>{" "}
          </li>
          <li className="list-item">
            <a href="#!">Men</a>{" "}
          </li>
          <li className="list-item">
            <a href="#!">Women</a>{" "}
          </li>
          <li className="list-item">
            <a href="#!">About</a>{" "}
          </li>
          <li className="list-item">
            <a href="#!">Contact </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  transform: "translateX(0)",
};
