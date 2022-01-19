import React from 'react';

const Image = ({src}) => {
  return (
    <img className="postImage" src={src} alt={src}/>
  );
}

export default Image;
