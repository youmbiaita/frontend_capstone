import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import AdminPage from "./components/AdminPage";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
// import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import NewOrder from "./components/NewOrder";
import Register from "./components/Registration";

import "./App.css";

function App() {
  return (
    <>
      <div className="home">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu/>} />
          {/* <Route path="/register" element={<LoginPage/>} /> */}
          <Route path="/newOrder" element={<NewOrder/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
