import React from "react";
import PresentDataFromJson from "../components/PresentDataFromJson";
import IconFilter from "./IconFilter";
import "../style/Homepage.css";

function HomePage() {
  return (
    <div className="MainDivHomePage">
      <IconFilter />
      <PresentDataFromJson />
      <div>dsdsd</div>
    </div>
  );
}

export default HomePage;
