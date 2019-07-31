import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { Slide } from "react-slideshow-image";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 2,
          linkUrl: ""
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
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
  }
}

export default Directory;
