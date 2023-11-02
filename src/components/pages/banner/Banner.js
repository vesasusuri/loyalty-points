import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./banner.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner-title"
            defaultMessage="Rewarding your loyalty, one point at a time."
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="Loyalty points, earned through purchases or engagement, strengthen customer loyalty and create a mutually beneficial customer-business relationship."
          />
        </p>
        <div className="links">
          <Link className="button2">
            <BsTelephoneFill className="iconPhone"/>
            <FormattedMessage id="contact" defaultMessage="Contact Us" />
          </Link>
        </div>
      </div>

      <div className="inner-banner-photo" 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"></div>
    </div>
  );
};
export default Banner;