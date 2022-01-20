import React,{useEffect,useState,useContext} from "react";
import { Link } from "react-router-dom";
import storage from "../../methods/storage";
import { LikedContext } from "../../Routing";

const Status = ({explanation, copyright, date,simplified,url,type}) => {

  const [likeTirgger,setLikeTrigger]=useContext(LikedContext);




  const shortenText =
    explanation.length > 150 ? `${explanation.slice(0, 150)} ...` : explanation;
    const [liked,setLiked]=useState(false);

    useEffect(() => {
      let likedList=storage.getLikedList();
      setLiked(likedList.filter(item=>item.date === date).length?true:false);
      

    }, [date]);

    const handleLike=()=>{
      console.log(type);
      liked?storage.removeLikedItem(date):storage.setLikedItem({date:date,url:url,type:type});
      setLiked(!liked);
      setLikeTrigger(!likeTirgger);
    }



  return (
    <div className="status">
      <div className="like">
      <i style={liked?{color:"red"}:{}} onClick={()=>handleLike()}className="far fa-heart"></i>
      </div>
      <div >        
        <b>{copyright}</b>
        {simplified?<>{shortenText}<Link to={`/date/${date}`} className="readmore">read more</Link></>:explanation}
      </div>
      <div className="comment"></div>
      <div className="date">
        {date}
      </div>
    </div>
  );
};

export default Status;
