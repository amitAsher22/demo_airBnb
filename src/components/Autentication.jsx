import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { RxHamburgerMenu } from "react-icons/rx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAutentication from "../components/ListAutentication";
import "../assets/Autentication.css";

function Autentication() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="MainDivAutentication">
      <div
        className="circleAutentication"
        onClick={() => setShowCard(!showCard)}
      >
        <MenuIcon fontSize="large" />
        <AccountCircleIcon fontSize="large" />
      </div>
      <div className="fatherDivAutentication">
        {showCard ? (
          <div className="sonDivAutentication">
            <ListAutentication />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Autentication;
