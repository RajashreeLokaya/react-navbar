import React, { useState } from "react";
import "./NavBar.scss";
import { loGoImage } from "../../assets/images";
import { MenuData } from "./navData";
const NavBar = () => {
  const [mobileClose, setMobileClose] = useState(false);
  const handleMCloseBtn = () => {
    setMobileClose((x) => !x);
  };
  return (
    <nav>
      <a href="index.html">
        <img src={loGoImage} alt="logo"></img>
      </a>
      <div className={`desktop-sec ${mobileClose ? "active" : ""}`}>
        <ul>
          {MenuData.map((item) => {
            return (
              <li>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mobile-sec" onClick={handleMCloseBtn}>
        <i className={mobileClose ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
};

export default NavBar;
