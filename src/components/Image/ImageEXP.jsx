import React from "react";

import Image from "../../commonUI/image/Image";

const IMAGES = [
  "http://allinoneweb.net/Including/Images/home/logo.png",

  "http://allinoneweb.net/Including/Images/home/logo.png",

 
];

const ImageEXP = () => (
  <>
    {IMAGES.map(image => (
      <Image source={image} key={image} className={"img"} />
    ))}

  </>
);

export default ImageEXP;
