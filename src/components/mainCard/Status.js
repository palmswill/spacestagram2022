import React from "react";
import { Link } from "react-router-dom";

const Status = ({explanation, liked, copyright, date,simplified}) => {
  const shortenText =
    explanation.length > 150 ? `${explanation.slice(0, 150)} ...` : explanation;

  return (
    <div className="status">
      <div className="like"></div>
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
