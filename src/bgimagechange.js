import React, { useState} from "react";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";

export default function App() {
  const [bgimage, setBgImage] = useState(image1);

  const changeBackgroundImage = () => {
    const images = [image1, image2];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  };

  return (
    <div style={{ backgroundImage: `url(${bgimage})`, height: "80vh", display: "flex" }}>
      <button onClick={changeBackgroundImage}>Change backgroundImage</button>
    </div>
  );
}