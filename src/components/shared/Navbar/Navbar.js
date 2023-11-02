import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import { BsTriangleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./navbar.scss";

import PortfolioMenu from "./Megamenus/PortfolioMenu";
import ServicesMenu from "./Megamenus/ServicesMenu";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 25 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")}
    >
      <div className="left-side">
        <Link to="/" className="nav-logo">
          <div className="logo-container"></div>
        </Link>
      </div>

      <div className="nav-links">
        <div className="nav-link support-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="home" defaultMessage="Home" />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link portfolio-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="About" defaultMessage="About" />
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow">
            <BsTriangleFill />
          </div>
          <div className="line"></div>
          <PortfolioMenu />
        </div>

        <div className="nav-link services-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="Loyalty-Blogs" defaultMessage="Loyalty Blogs" />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link services-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="Contact-Us" defaultMessage="Contact Us" />
          </Link>
          <div className="line"></div>
        </div>

        
      </div>

      <div className="nav-auth">
        <Link to="/" className="contact-us">
          <FormattedMessage id="login" defaultMessage="Log In" />
        </Link>
      </div>

      <MobileNav />
    </div>
  );
};

export default Navbar;
