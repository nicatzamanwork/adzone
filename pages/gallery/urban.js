import React, { useState } from "react";
import Navbar from "../../app/components/Navbar"; // Adjust path if necessary
import "../LocationPage.css"; // Ensure the CSS file is correctly linked
import { useTranslation } from "react-i18next";

const UrbanPage = () => {
  const { t } = useTranslation("gallery");
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "Ur-Mod-1.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-2.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-3.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-4.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-5.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-6.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-7.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-8.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-9.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-Mod-10.png",
      tags: ["Modern"],
    },
    {
      src: "Ur-His-1.png",
      tags: ["History"],
    },
    {
      src: "Ur-His-2.png",
      tags: ["History"],
    },

    {
      src: "Ur-View-1.png",
      tags: ["View"],
    },
    {
      src: "Ur-View-2.png",
      tags: ["View"],
    },
    {
      src: "Ur-View-3.png",
      tags: ["View"],
    },
  ];

  const filters = [
    { key: "all", label: t("filters.all") },
    { key: "History", label: t("filters.history") },
    { key: "Modern", label: t("filters.modern") },
    { key: "View", label: t("filters.view")},
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
          <h1>{t("urban.title")}</h1>
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
            const imagePath = `/images/Ur/${
              image.tags.includes("History")
                ? "His"
                : image.tags.includes("Modern")
                ? "Mod"
                : image.tags.includes("View")
                ? "View"
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
                src={`/images/Ur/${
                  selectedImage.tags.includes("History")
                    ? "His"
                    : selectedImage.tags.includes("Modern")
                    ? "Mod"
                    : selectedImage.tags.includes("View")
                    ? "View"
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

export default UrbanPage;
