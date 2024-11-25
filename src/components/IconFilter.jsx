import React, { useEffect, useContext } from "react";
import filterData from "../../public/filters.json";
import "../style/IconFilter.css";
import { MyContext } from "../App";
import information from "../../public/data.json";

function IconFilter() {
  const { datat, setInfoata, setInfoData } = useContext(MyContext);

  const FilteByName = (filterName) => {
    let resultNewArry = information.filter(
      (prvent) => prvent.category === filterName
    );

    setInfoData(resultNewArry);
  };
  return (
    <div className="iconsDiv">
      {datat.map((item, index) => {
        return (
          <div key={index} className="iconFilter">
            <div className="sizeDiv" onClick={() => FilteByName(item.title)}>
              <div>
                <img src={item.icon} alt={"index"} className="imgFilter" />
              </div>
              <span value={item.title}>{item.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IconFilter;
