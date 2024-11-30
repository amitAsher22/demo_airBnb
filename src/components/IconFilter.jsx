import React, { useEffect, useContext } from "react";
import "../style/IconFilter.css";
import information from "../../public/data.json";
import { DataContext } from ".././contexts/DataContext";

function IconFilter() {
  const { datatNew, setInfoata, filterData, setFilterData } =
    useContext(DataContext);

  // function present new Array by Category
  const FilteByName = (filterName) => {
    let resultNewArry = information.filter(
      (prvent) => prvent.category === filterName
    );

    setInfoata(resultNewArry);
  };

  return (
    <div className="iconsDiv">
      {filterData.map((item, index) => {
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
