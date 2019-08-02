import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import MenuIcon from "../menu-icon/menu-icon.component";

import { toggleCartOff } from "../../redux/cart/cart.actions";
import { toggleMenuOff } from "../../redux/menu/menu.actions";
import Navigation from "../navigation-container/navigation-container.component";
import { ReactComponent as Farrod } from "../../assets/farrod.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import Magnifier from "./magnifier.png";

import "./header.styles.scss";

const Header = ({
  currentUser,
  isVisible,
  hidden,
  toggleMenuOff,
  toggleCartOff
}) => {
  const onLogoClick = () => {
    toggleCartOff();
    toggleMenuOff();
  };
  return (
    <div className="">
      <div
        className={classNames("header", {
          "header--hidden": !isVisible
        })}
      >
        <div className="navig">
          <Navigation />
        </div>
        <div className="menu-button ">
          <MenuIcon />
        </div>
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
        <Link className="logo-container" onClick={onLogoClick} to="/">
          <Farrod className="logo" />
        </Link>
        <div className="search">
          <img className="search-item lens" alt="search" src={Magnifier} />
          <CartIcon className="search-item" />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartOff: () => dispatch(toggleCartOff()),
  toggleMenuOff: () => dispatch(toggleMenuOff())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
