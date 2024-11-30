import React, { useContext } from "react";
import imgIcon from "../assets/Logoweb.png";
import "../assets/Header.css";
// y

import information from "../../public/data.json";
import { DataContext } from ".././contexts/DataContext";

function ImageIcon() {
  const { datatNew, setInfoata } = useContext(DataContext);

  // function present all Array Of Objects
  const PresentFullData = () => {
    setInfoata(information);
  };

  return (
    <div
      onClick={() => {
        PresentFullData();
      }}
    >
      <img src={imgIcon} alt="assetsicon" style={{ width: "70px" }} />
    </div>
  );
}

export default ImageIcon;
