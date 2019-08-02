import React from "react";
import { connect } from "react-redux";

import { toggleMenuHidden } from "../../redux/menu/menu.actions";
import { toggleCartOff } from "../../redux/cart/cart.actions";

import { ReactComponent as Icon } from "../../assets/menu-button.svg";

import "./menu-icon.styles.scss";

const MenuIcon = ({ toggleMenuHidden, toggleCartOff }) => {
	const handleListItemClick = () => {
		toggleMenuHidden();
		toggleCartOff();
	};
	return (
		<div className="menu-icon">
			<Icon className="shopping-icon" onClick={handleListItemClick} />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleMenuHidden: () => dispatch(toggleMenuHidden()),
	toggleCartOff: () => dispatch(toggleCartOff())
});

export default connect(
	null,
	mapDispatchToProps
)(MenuIcon);
