import React from "react";
import storage from "../methods/storage";
import { useNavigate } from "react-router-dom";

const Mainsidebar = () => {
  let cards = storage.getLikedList();
  const navigate=useNavigate();

  return (
    <>
      <h3>What You Liked</h3>
      <div className="side-card-container">
        {cards.map((card,index) => {
          const { date, url } = card;
          return (
            <div onClick={()=>navigate(`/date/${date}`)} className="side-card" key={date+index}>
              <img src={`${url}`} alt={date} />
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mainsidebar;
