import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import Popular from "./pages/Popular";
import All from "./pages/All";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/all" element={<All />} />
        </Route>

        <Route path="/about" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
