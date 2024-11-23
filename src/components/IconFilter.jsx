import React, { useEffect, useState } from "react";
import filterData from "../../public/filters.json";
import "../style/IconFilter.css";

function IconFilter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(filterData);
  }, []);

  return (
    <div className="iconsDiv">
      {data.map((item, index) => {
        return (
          <div key={index} className="iconFilter">
            <div className="sizeDiv">
              <div>
                <img src={item.icon} alt={"index"} className="imgFilter" />
              </div>
              <span>{item.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IconFilter;
