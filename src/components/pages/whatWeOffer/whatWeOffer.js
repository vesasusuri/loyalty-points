import React from "react";
import { FormattedMessage } from "react-intl";
import "./whatWeOffer.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";

const WhatWeOffer = () => {
  return (
    <div className="banner2"  data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="inner-banner-photo2"></div>
      <div
        className="info"
       
      >
        <h1>
          <FormattedMessage
            id="home-banner2-title"
            defaultMessage="What we offer ?"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="At LOYAL TREASURES, we offer a world of rewards and benefits to enhance your shopping and loyalty experience. Our platform is designed to make your customer journey more rewarding and engaging. "
          />
        </p>
      </div>

    </div>
  );
};
export default WhatWeOffer;
