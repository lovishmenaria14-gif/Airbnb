import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ListingDetails from "./pages/ListingDetails";
import Bookings from "./pages/Bookings";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;