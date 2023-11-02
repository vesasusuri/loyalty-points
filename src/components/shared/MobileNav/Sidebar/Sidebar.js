import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { FaBloggerB, FaHotel } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { AiFillHome} from "react-icons/ai";

import { MdKeyboardArrowDown,MdContactPhone} from "react-icons/md";
import { AboutData } from "../../Navbar/data";

const Sidebar = (props) => {
  const [list, showList] = useState(false);
  const [list2, showList2] = useState(false);
  const [list3, showList3] = useState(false);
  function show() {
    showList(!list);
  }
  function show2() {
    showList2(!list2);
  }
  function show3() {
    showList3(!list3);
  }

  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
        </Link>
        <button onClick={props.click}>
          <CgClose />{" "}
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="nav-sidebar-link">
          <Link to="/home" className="nav-anchor">
            <AiFillHome />
            <FormattedMessage id="home" defaultMessage="Home" />
          </Link>
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show2}>
            <Link to="/hotels" className="nav-anchor">
              <FaHotel />
              <FormattedMessage id="About-Us" defaultMessage="About-Us" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list2 === true && (
            <div className="mobile-dopdown">
              {AboutData.map((props) => {
                return (
                  <div className="inner-links">
                    <Link to={props.to}>{props.title}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="inner-nav-link">
            {" "}
            <FaBloggerB />
            <FormattedMessage
              id="Loyalty-Blogs"
              defaultMessage="Loyalty Blogs"
            />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="inner-nav-link">
            <MdContactPhone />
            <FormattedMessage id="Contact-Us" defaultMessage="Contact Us" />
          </Link>
          <div className="line"></div>
        </div>
      </div>

      <div className="sidebar-auth">
        <Link to="/" className="contact-us">
          <FormattedMessage id="login" defaultMessage="Log In" />
        </Link>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
