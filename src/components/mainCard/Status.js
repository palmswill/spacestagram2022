import React from "react";

const Status = ({explanation, liked, copyright, date}) => {
  const shortenText =
    explanation.length > 150 ? `${explanation.slice(0, 150)} ...` : explanation;

  return (
    <div className="status">
      <div className="like"></div>
      <div>
        <b>{copyright}</b>{shortenText}<span className="readmore">read more</span>
      </div>
      <div className="comment"></div>
      <div className="date">
        {date}
      </div>
    </div>
  );
};

export default Status;
