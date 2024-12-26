import React, { useState } from "react";
import "./LocationPage.css"; // Ensure the file path is correct
import Navbar from "../app/components/Navbar";

const LocationPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: "7 (1).jpg", tags: ["History"], title: "Sheki Khan Palace" },
    { src: "7.jpg", tags: ["Village"], title: "Sheki Khan Palace" },
    { src: "8 (2).jpg", tags: ["Desert"], title: "Three Saints Church" },
    // Add a title if known
    { src: "10.jpg", tags: ["History"], title: "Shaki Carevansarai" },
    { src: "15.jpg", tags: ["Village"], title: "Church of Kish" },
    { src: "16.jpg", tags: ["History"], title: "Ateshgah" },
    { src: "17.jpg", tags: ["History"], title: "Ateshgah" },
    { src: "18.jpg", tags: ["History"], title: "Ateshgah" },
    { src: "19.jpg", tags: ["History"], title: "Ateshgah" },
    { src: "20.jpg", tags: ["History"], title: "Diri Baba" },
    { src: "21.jpg", tags: ["Village"], title: "Diri Baba" },
    { src: "22.jpg", tags: ["Village"], title: "Lahic" },
    { src: "23.jpg", tags: ["Village"], title: "Lahic" },
    { src: "24.jpg", tags: ["Village"], title: "Lahic" },
    { src: "25.jpg", tags: ["Mountain"], title: "Beshbarmag" },
    { src: "26.jpg", tags: ["Mountain"], title: "Beshbarmag" },
    { src: "27.jpg", tags: ["Mountain"], title: "Beshbarmag" },
    { src: "28.jpg", tags: ["Mountain"], title: "Khinalig" },
    { src: "29.jpg", tags: ["Mountain"], title: "Khinalig" },
    { src: "30.jpg", tags: ["Mountain"], title: "Khinalig" },
  ];

  const filters = ["All", "History", "Village", "Mountain"];

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
                alt={image.title}
                className="card-img"
              />
              <h2>{image.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationPage;
