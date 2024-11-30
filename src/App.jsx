import React, { createContext, useState, useEffect } from "react";

/// components
import HomePage from "./components/HomePage";
import Header from "./components/Header";

///Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/App.css";
import data from ".././public/data.json";
import daataFilter from ".././public/filters.json";
import information from ".././public/data.json";
import { DataProvider } from "./contexts/DataContext";

export const MyContext = createContext();
function App() {
  const [datat, setInfoata] = useState(daataFilter);
  const [infoData, setInfoData] = useState(information);
  const [nameFilter, setNameFilter] = useState("");

  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes className="HomeAppRouter">
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
