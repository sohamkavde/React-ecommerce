import React, { useState, useRef } from "react";
import "../../css/HoverImage.css"; // Import CSS for styling

const HoverZoom = ({image}) => {
  const [showZoom, setShowZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    let x = ((event.clientX - left) / width) * 100;
    let y = ((event.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div 
      className="product-container" 
      ref={containerRef}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      <img src={image}alt="Product" className="product-image" />

      {showZoom && (
        <div className="zoom-container">
          <img 
            src={image} 
            alt="Zoomed Product" 
            className="zoomed-image"
            style={{ transform: `translate(-${position.x}%, -${position.y}%)` }}
          />
        </div>
      )}
    </div>
  );
};

export default HoverZoom;
