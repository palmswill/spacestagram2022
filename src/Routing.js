import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Likepage from "./pages/LikePage";
import ShowPage from "./pages/ShowPage";
import Navbar from "./panels/NavBar";

export const LikedContext = createContext();

const Routing = () => {
  let [likeTrigger, setLikeTrigger] = useState(true);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <LikedContext.Provider value={[likeTrigger, setLikeTrigger]}>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/date/:date" element={<ShowPage />} />
              <Route path="likedList" element={<Likepage/>} exact/>
            </Routes>
          </main>
        </LikedContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default Routing;
