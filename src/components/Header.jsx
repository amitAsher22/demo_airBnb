import React from "react";
import ImageIcon from "../components/ImageIcon";
import Autentication from "../components/Autentication";
import "../assets/Header.css";

function Header() {
  return (
    <div className="bgHeder">
      <div className="mainIcon">
        <ImageIcon />
        <div>
          <Autentication />
        </div>
      </div>
    </div>
  );
}

export default Header;
