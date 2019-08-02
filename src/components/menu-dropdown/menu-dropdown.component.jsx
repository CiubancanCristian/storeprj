import React from "react";

import Nav from "../navigation/navigation.component";
import MenuAccount from "../menu-account/menu-account.component";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => (
  <div className="menu-div">
  <MenuAccount/>
    <div className="nav-div">
    <Nav/>
      <div className="categories">
      </div>
    </div>
  </div>
);

export default MenuDropdown;
