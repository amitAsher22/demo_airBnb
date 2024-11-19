import React from "react";
/// components
import HomePage from "./components/HomePage";
import Header from "./components/Header";

///Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./assets/App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes className="HomeAppRouter">
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
