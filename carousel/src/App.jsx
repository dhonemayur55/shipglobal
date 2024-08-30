import React from "react";
import Carousel from "./Carousel";
import img from './assets/img1.avif'

const images = [
  "https://images.unsplash.com/photo-1724862941235-0d880da26f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724781598192-19bed9bffab0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697778136245-d0d67de916ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
];

const fallbackImage = img

function App() {
  return (
    <div >
      <Carousel images={images} fallbackImage={fallbackImage} />
    </div>
  );
}

export default App;
