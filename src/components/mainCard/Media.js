import React from 'react';

const Image = ({src,type}) => {
  return (
    <img className="postImage" src={src} alt={src}/>
  );
}

export default Image;
