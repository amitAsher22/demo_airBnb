// src/contexts/DataContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import FullData from "../../public/data.json";
import FilterData from "../../public/filters.json";

// יצירת Context חדש
export const DataContext = createContext();

// hook מותאם אישית לגישה ל-Context
export const useData = () => {
  return useContext(DataContext);
};

// קומפוננטת Provider שמספקת את הנתונים לכל הילדים
export const DataProvider = ({ children }) => {
  const [datat, setInfoata] = useState(FilterData);
  const [infoData, setInfoData] = useState(FilterData);
  const [nameFilter, setNameFilter] = useState("");

  return (
    <DataContext.Provider
      value={{
        datat,
        setInfoata,
        infoData,
        setInfoData,
        setNameFilter,
        nameFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
