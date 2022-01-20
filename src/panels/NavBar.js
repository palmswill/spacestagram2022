import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <span className="title">Spacestegram</span>
      <div className="menu flex">
      <i onClick={()=>navigate("/")} className="fas fa-home"></i>
      <i onClick={()=>navigate("/")}className="far fa-heart"></i>
      

      </div>

    </nav>
  );
}

export default Navbar;
