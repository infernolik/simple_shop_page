import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import React, { Fragment } from "react";
import Navbar from "./UI/Navbar.js";
import Item from "./UI/Item.js";
import ItemState from "./context/image/ItemState.js";
import CartState from "./context/addBtn/CartState.js";
import LightboxState from "./context/lightbox/LightboxState.js";
import LightWrapper from "./activeData/LightWrapper.js";
// for hamburger menu
import HamburgerState from "./context/windowRezAndHamburger/HamburgerState.js";

function App() {
  return (
    <ItemState>
      <LightboxState>
        <CartState>
          <HamburgerState>
            <LightWrapper />
            <Fragment>
              <div className="container">
                <Navbar />
                <Item />
              </div>
            </Fragment>
          </HamburgerState>
        </CartState>
      </LightboxState>
    </ItemState>
  );
}

export default App;
