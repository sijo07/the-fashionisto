import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  Login,
  Signup,
  WesternWear,
  FootWear,
  InnerWear,
  Accessories,
} from "../pages";
import Layout from "./layouts";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="westernwear" element={<WesternWear />} />
            <Route path="footwear" element={<FootWear />} />
            <Route path="innerwear" element={<InnerWear />} />
            <Route path="accessories" element={<Accessories />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}
