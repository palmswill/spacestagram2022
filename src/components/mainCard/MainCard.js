import React from "react";
import Commentinput from "./CommentInput";
import Media from "./Media";
import Status from "./Status";
import Username from "./UserName";

const Maincard = ({ id, info }) => {
  

  const { date, explanation, media_type, url, title, copyright } = info;
  return (
    <div className="main-card" key={id} id={id}>
      <Username title={title} />
      <Media src={url} type={media_type} />
      <Status explanation={explanation} simplified copyright={copyright} date={date} url={url} type={media_type}/>
      <Commentinput/>
    </div>
  );
};

export default Maincard;
