import React,{useEffect,useState} from "react";
import Maincard from "./mainCard/MainCard";
import API from "../methods/APIs";

const Displaycards = () => {

  const [cards,setCards]=useState([]);
  
  useEffect(() => {
    API.getRandomPost()
    .then(res=>setCards(res)
    )
  }, []);



  return (
    <>
      {cards.map((card, index) => (
        <Maincard info={card} id={card.date + index} key={card.date + index} />
      ))}
    </>
  );
};

export default Displaycards;
