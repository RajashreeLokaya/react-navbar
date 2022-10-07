import React, { useState } from "react";
import "./NavBar.scss";
import { loGoImage } from "../../assets/images";
const NavBar = () => {
  const [mobileClose, setMobileClose] = useState(false);
  const handleMCloseBtn = () => {
    console.log("hit");
    setMobileClose((x) => !x);
  };
  return (
    <nav>
      <a href="index.html">
        <img src={loGoImage} alt="logo"></img>
      </a>
      <div
        className={`desktop-sec ${
          mobileClose ? "active" : ""
        }`}
      >
        <ul>
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="index.html">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="index.html">Document</a>
          </li>
        </ul>
      </div>
      <div className="mobile-sec" onClick={handleMCloseBtn}>
        <i className={mobileClose ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
};

export default NavBar;
