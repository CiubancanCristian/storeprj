import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleMenuOff } from "../../redux/menu/menu.actions.js";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./menu-account.styles.scss";

const MenuAccount = ({ currentUser, dispatch }) => (
  <div className="menu-account">
    <Link
      className="menu-account-option"
      to="/shop"
      onClick={() => dispatch(toggleMenuOff())}
    >
      SHOP
    </Link>
    <Link
      className="menu-account-option"
      to="/shop"
      onClick={() => dispatch(toggleMenuOff())}
    >
      CONTACT
    </Link>
    {currentUser ? (
      <div className="menu-account-option" onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
    ) : (
      <Link
        className="menu-account-option"
        to="/signin"
        onClick={() => dispatch(toggleMenuOff())}
      >
        SIGN IN
      </Link>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(MenuAccount);
