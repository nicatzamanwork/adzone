import React, { useState } from "react";
import "./LocationPage.css"; // Ensure the file path is correct
import Navbar from "../app/components/Navbar";

const LocationPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Grouping images by tags
  const images = [
    { src: "7 (1).jpg", tags: ["History"] },
    { src: "7.jpg", tags: ["Village"] },
    { src: "8 (2).jpg", tags: ["Desert"] },
    { src: "9 (1).jpg", tags: ["Mountain"] },
    { src: "10.jpg", tags: ["History"] },
    { src: "15.jpg", tags: ["Village"] },
    { src: "16.jpg", tags: ["Desert"] },
    { src: "17.jpg", tags: ["Mountain"] },
    { src: "18.jpg", tags: ["History", "Village"] },
    { src: "19.jpg", tags: ["Desert", "Mountain"] },
    { src: "20.jpg", tags: ["History"] },
    { src: "21.jpg", tags: ["Village"] },
    { src: "22.jpg", tags: ["Village"] },
    { src: "23.jpg", tags: ["Village"] },
    { src: "24.jpg", tags: ["Village"] },
  ];

  const filters = ["All", "History", "Village", "Desert", "Mountain"];

  // Determine which images to display based on the selected filter
  const filteredImages =
    activeIndex === 0 || activeIndex === null
      ? images
      : images.filter((image) => image.tags.includes(filters[activeIndex]));

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="location-page">
        {/* Header Section */}
        <header className="header">
          <h1 style={{ textAlign: "left" }}>Locations</h1>
        </header>

        {/* Filters Section */}
        <div className="filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="card-grid">
          {filteredImages.map((image, index) => (
            <div className="card" key={index}>
              <img
                src={`images/ancient/${image.src}`}
                alt={`Location ${index + 1}`}
                className="card-img"
              />
              <h2>Location Scouting</h2>
              <p>Discover stunning locations for your film project.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationPage;
