import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";
import Navbar from "./panels/NavBar";

const Routing = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path=":date" element={<ShowPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default Routing;
