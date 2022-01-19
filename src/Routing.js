import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Displaycards from './pages/DisplayCards';

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Displaycards/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default Routing;
