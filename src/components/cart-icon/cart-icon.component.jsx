import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { toggleMenuOff } from "../../redux/menu/menu.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount, toggleMenuOff }) => {
	const handleListItemClick = () => {
		toggleCartHidden();
		toggleMenuOff();
	};
	return (
		<div className="cart-icon" onClick={handleListItemClick}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
	toggleMenuOff: () => dispatch(toggleMenuOff())
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartIcon);
