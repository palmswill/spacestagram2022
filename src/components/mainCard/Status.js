import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import storage from "../../methods/storage";

const Status = ({explanation, copyright, date,simplified}) => {
  const shortenText =
    explanation.length > 150 ? `${explanation.slice(0, 150)} ...` : explanation;
    const [liked,setLiked]=useState(false);

    useEffect(() => {
      let likedList=storage.getLikedList();
      setLiked(likedList.includes(date));

    }, [date]);

    const handleLike=()=>{
      liked?storage.removeLikedItem(date):storage.setLikedItem(date);
      setLiked(!liked);
    }



  return (
    <div className="status">
      <div className="like">
      <i style={liked?{color:"red"}:{}} onClick={()=>handleLike()}className="far fa-heart"></i>
      </div>
      <div >        
        <b>{copyright}</b>
        {simplified?<>{shortenText}<Link to={`${date}`} className="readmore">read more</Link></>:explanation}
      </div>
      <div className="comment"></div>
      <div className="date">
        {date}
      </div>
    </div>
  );
};

export default Status;
