import React from 'react';
import { useNavigate,useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location=useLocation();
  

  return (
    <nav>
      <span className="title" onClick={()=>navigate("/")} >Spacestegram</span>
      <div className="menu flex">
      <i style={location.pathname==="/"?{color:"black"}:{}} onClick={()=>navigate("/")} className="fas fa-home"></i>
      <i style={location.pathname==="/likedList"?{color:"black"}:{}}onClick={()=>navigate("/likedList")}className="far fa-heart"></i>
      

      </div>

    </nav>
  );
}

export default Navbar;
