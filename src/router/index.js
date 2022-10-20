import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import Api from "@pages/Api";
import Page404 from "@pages/404";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
