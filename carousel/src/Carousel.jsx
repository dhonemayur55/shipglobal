import React, { useState } from "react";
import "./App.css";

const Carousel = ({ images, fallbackImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-control prev">
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt="carousel"
        onError={handleImageError}
        className="carousel-image"
      />
      <button onClick={nextImage} className="carousel-control next">
        &#10095;
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
