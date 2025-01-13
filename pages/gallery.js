import React, { useState } from "react";
import Navbar from "../app/components/Navbar";
import "./LocationPage.css"; // Ensure the file path is correct
import { useTranslation } from "react-i18next";

const LocationPage = () => {
  const { t } = useTranslation("gallery");
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const images = [
    { src: "white city_Baku.jpeg", tags: ["City"], title: "White City, Baku" },
    { src: "Дворец любви.jpeg", tags: ["Historical"], title: "Palace of Love" },
    { src: "Филармония_2.jpeg", tags: ["Historical"], title: "Philharmonia" },
  ];

  const filters = [
    t("filters.all"),
    t("filters.history"),
    t("filters.village"),
    t("filters.mountain"),
    t("filters.water"),
    t("filters.modern"),
    t("filters.park"),
    t("filters.view"),
  ];
  const filteredImages =
    activeIndex === 0 || activeIndex === null
      ? images
      : images.filter((image) => image.tags.includes(filters[activeIndex]));

  const handleFilterClick = (index) => {
    setActiveIndex(index);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set clicked image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close modal
  };

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="location-page">
        {/* Header Section */}
        <header className="header">
          <h1>{t("header.title")}</h1>
        </header>

        <div className="filters">
          {/* Go Back Link */}

          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleFilterClick(index)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="card-grid">
          {filteredImages.map((image, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleImageClick(image)} // Handle image click
            >
              <img
                src={`images/ancient/${image.src}`}
                alt={image.title}
                className="card-img"
                onContextMenu={disableRightClick} // Disable right-click
              />
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={handleCloseModal}>
                &times;
              </button>
              <img
                src={`images/ancient/${selectedImage.src}`}
                alt={selectedImage.title}
                className="modal-img"
                onContextMenu={disableRightClick} // Disable right-click
              />
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .go-back-link {
          display: inline-block;
          margin: 1rem;
          font-size: 1rem;
          color: blue;
          text-decoration: underline;
          cursor: pointer;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          border-radius: 8px;
          text-align: center;
          position: relative;
          max-width: 500px;
          width: 90%;
        }

        .modal-img {
          width: 100%;
          height: auto;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #000;
        }
      `}</style>
    </>
  );
};

export default LocationPage;
