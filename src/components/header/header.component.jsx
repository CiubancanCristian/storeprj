import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import Logo from "./farrod.png";
import Magnifier from "./magnifier.png";

import "./header.styles.scss";

const Header = ({ currentUser, isVisible, hidden }) => (
  <div>
    <div
      className={classNames("header", {
        "header--hidden": !isVisible
      })}
    >
      {" "}
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
      <Link className="logo-container" to="/">
        <img className="logo" alt="logo" src={Logo} />
      </Link>
      <div className="search">
        <img className="pr3" alt="search" src={Magnifier} />
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
