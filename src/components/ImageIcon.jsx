import { MyContext } from "../App";
import React, { useContext } from "react";
import imgIcon from "../assets/Logoweb.png";
import "../assets/Header.css";
// y

import information from "../../public/data.json";

function ImageIcon() {
  const { setInfoData } = useContext(MyContext);

  const PresentFullData = () => {
    setInfoData(information);
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
