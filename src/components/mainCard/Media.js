import React from 'react';

const Image = ({src,type}) => {
  if (type !=="image"){
    return <iframe src={src} title={src}></iframe>

  }
  return (
    <img className="postImage" src={src} alt={src}/>
  );
}

export default Image;
