import React, { useContext, useEffect, useCallback } from "react";
import Cart from "../activeData/Cart.js";
import cartImg from "../images/icon-cart.svg";
import menuIcon from "../images/icon-menu.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import cartContext from "../context/addBtn/cartContext";
import HamburgerMenu from "./HamburgerMenu.js";
// ham context
import hamburgerContext from "../context/windowRezAndHamburger/hamburgerContext.js";

export default function Navbar() {
  const hamContext = useContext(hamburgerContext);
  const cart = useContext(cartContext);
  const { itemsInCart, switchCart } = cart;

  const handleHamburgerSwitcher = () => {
    window.document.body.style.overflow = "hidden";
    hamContext.switchHam();
  };
  const checkMedia = useCallback(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      hamContext.switchRez(true);
    } else {
      hamContext.switchRez(false);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", checkMedia, { once: true });
  });
  const handleClick = () => {
    switchCart();
  };

  return (
    <div className="nav">
      <div className="leftNav">
        <div className="logo">
          {hamContext.media ||
          window.matchMedia("(max-width: 768px)").matches ? (
            <img
              src={menuIcon}
              className="menu-icon"
              onClick={handleHamburgerSwitcher}
              alt="menu"
            ></img>
          ) : null}
          {/* eslint-disable-next-line */}
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {!window.matchMedia("(max-width: 768px)").matches ? (
          <ul className="navList">
            {/* <li className="logo">
            
          </li> */}
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
        ) : null}
        {/*  */}
      </div>
      <div className="rightNav">
        <div className="goods">
          <img
            src={cartImg}
            alt="cart"
            className="cart"
            onClick={handleClick}
          />
          {/* Set to dynamic number */}
          <span style={itemsInCart === 0 ? styles : null}>
            {itemsInCart > 0 ? itemsInCart : null}
          </span>
        </div>
        <img src={avatar} alt="avatar" className="profilePic" />
        <Cart />
      </div>
      {window.matchMedia("(max-width: 768px)").matches ? (
        <HamburgerMenu />
      ) : null}
    </div>
  );
}

const styles = {
  display: "none",
};
