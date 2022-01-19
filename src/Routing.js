import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Displaycards from "./pages/DisplayCards";

const Routing = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Displaycards />} exact/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
