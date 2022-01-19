import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";

const Routing = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path=":date" element={<ShowPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
