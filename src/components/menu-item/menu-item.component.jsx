import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleMenuOff } from "../../redux/menu/menu.actions.js";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match, dispatch }) => (
  <div
    className={`menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
      dispatch(toggleMenuOff());
    }}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <span className="title">{title.toUpperCase()}</span>
    </div>
  </div>
);

export default withRouter(connect()(MenuItem));
