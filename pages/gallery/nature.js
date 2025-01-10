import React, { useState } from "react";
import Navbar from "../../app/components/Navbar"; // Adjust path if necessary
import "../LocationPage.css"; // Ensure the CSS file is correctly linked
import { useTranslation } from "react-i18next";

const NaturePage = () => {
  const { t } = useTranslation("gallery");
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Desert images (1 to 5)
    { src: "Nat-Des-1.png", tags: ["Desert"] },
    { src: "Nat-Des-2.png", tags: ["Desert"] },
    { src: "Nat-Des-3.png", tags: ["Desert"] },
    { src: "Nat-Des-4.png", tags: ["Desert"] },
    { src: "Nat-Des-5.png", tags: ["Desert"] },

    // Mountain images (1 to 19)
    { src: "Nat-Mou-1.png", tags: ["Mountain"] },
    { src: "Nat-Mou-2.png", tags: ["Mountain"] },
    { src: "Nat-Mou-3.png", tags: ["Mountain"] },
    { src: "Nat-Mou-4.png", tags: ["Mountain"] },
    { src: "Nat-Mou-5.png", tags: ["Mountain"] },
    { src: "Nat-Mou-6.png", tags: ["Mountain"] },
    { src: "Nat-Mou-7.png", tags: ["Mountain"] },
    { src: "Nat-Mou-8.png", tags: ["Mountain"] },
    { src: "Nat-Mou-9.png", tags: ["Mountain"] },
    { src: "Nat-Mou-10.png", tags: ["Mountain"] },
    { src: "Nat-Mou-11.png", tags: ["Mountain"] },
    { src: "Nat-Mou-12.png", tags: ["Mountain"] },
    { src: "Nat-Mou-13.png", tags: ["Mountain"] },
    { src: "Nat-Mou-14.png", tags: ["Mountain"] },
    { src: "Nat-Mou-15.png", tags: ["Mountain"] },
    { src: "Nat-Mou-16.png", tags: ["Mountain"] },
    { src: "Nat-Mou-17.png", tags: ["Mountain"] },
    { src: "Nat-Mou-18.png", tags: ["Mountain"] },
    { src: "Nat-Mou-19.png", tags: ["Mountain"] },

    // Water images (1 to 2)
    { src: "Nat-Wat-1.png", tags: ["Water"] },
    { src: "Nat-Wat-2.png", tags: ["Water"] },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "Desert", label: "Desert" },
    { key: "Mountain", label: "Mountain" },
    { key: "Water", label: "Water" },
  ];

  const filteredImages =
    activeIndex === null || filters[activeIndex].key === "all"
      ? images
      : images.filter((image) => image.tags.includes(filters[activeIndex].key));

  const handleFilterClick = (index) => setActiveIndex(index);
  const handleImageClick = (image) => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  const disableRightClick = (e) => e.preventDefault();

  return (
    <>
      <Navbar />
      <div className="location-page">
        {/* Header */}
        <header className="header">
          <h1>{t("nature.title")}</h1>
        </header>

        {/* Filters */}
        <div className="filters">
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleFilterClick(index)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="card-grid">
          {filteredImages.map((image, index) => {
            const imagePath = `/images/Nat/${
              image.tags.includes("Desert")
                ? "Des"
                : image.tags.includes("Mountain")
                ? "Mou"
                : image.tags.includes("Water")
                ? "Wat"
                : ""
            }/${image.src}`;

            return (
              <div
                className="card"
                key={index}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={imagePath}
                  alt={image.title}
                  className="card-img"
                  onContextMenu={disableRightClick} // Disable right-click
                />
                <h3>{image.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={handleCloseModal}>
                &times;
              </button>
              <img
                src={`/images/Nat/${
                  selectedImage.tags.includes("Desert")
                    ? "Des"
                    : selectedImage.tags.includes("Mountain")
                    ? "Mou"
                    : selectedImage.tags.includes("Water")
                    ? "Wat"
                    : ""
                }/${selectedImage.src}`}
                alt={selectedImage.title}
                className="modal-img"
                onContextMenu={disableRightClick} // Disable right-click
              />
              <h3>{selectedImage.title}</h3>
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
          background-color: white;
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

export default NaturePage;
