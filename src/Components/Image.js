import React from 'react';

function ImageComponent({ src, alt = "", height = "auto", width = "auto", id="logo"}) {
  let path = "../../images/" + src;
  
  return (
    <img src={path} alt={alt} height={height} width={width} id={id}/>
  );
}

export default ImageComponent;
