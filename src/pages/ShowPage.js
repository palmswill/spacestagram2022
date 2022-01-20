import React, { useState, useEffect } from "react";
import Media from "../components/mainCard/Media";
import Username from "../components/mainCard/UserName";
import Status from "../components/mainCard/Status";
import Commentinput from "../components/mainCard/CommentInput";
import { useParams } from "react-router-dom";
import APIs from "../methods/APIs";

const Showpage = () => {
  let params = useParams().date;
  const [info, setInfo] = useState({});
  let { title, url, media_type, explanation, copyright, date } = info;
  

  useEffect(() => {
    APIs.getPostbyDate(params).then((res) => setInfo(res));
  }, [params]);
  if (!title) {
    return <></>;
  }

  return (
    <div className="show-page flex">
      <div className="left">
        <Media src={url} type={media_type}></Media>
      </div>
      <div className="right">
        <Username title={title} />
        <Status explanation={explanation} copyright={copyright} date={date} />
        <Commentinput />
      </div>
    </div>
  );
};

export default Showpage;
