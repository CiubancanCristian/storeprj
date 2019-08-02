import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { Slide } from "react-slideshow-image";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  const slideImages = [
    "https://www.next.co.uk/nxtcms/resource/blob/1057302/e66bf0dfa5c5cb85c8850166984ef0af/g23-menshp-data.gif",
    "https://i.ibb.co/cvpntL1/mens.png",
    "https://www.bodenimages.com/productimages/productlarge/19waut_w0093_dyl_w01.jpg"
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };
  return (
    <div>
      <Slide className="slide-container" {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
      <div className="info-section">
        <div className="info-card"></div>
        <div className="info-card "></div>
      </div>
      <div className="info-section">
        <div className="info-card-single"></div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
