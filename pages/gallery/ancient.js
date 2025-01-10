import React, { useState } from "react";
import Navbar from "../../app/components/Navbar"; // Adjust path if necessary
import "../LocationPage.css"; // Ensure the CSS file is correctly linked
import { useTranslation } from "react-i18next";

const AncientPage = () => {
  const { t } = useTranslation("gallery");
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/images/An/His/An-His-1.png",
      tags: ["History"],
    },
    {
      src: "/images/An/Vil/An-Vil-1.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-2.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-3.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-4.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-5.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-6.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-7.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/Vil/An-Vil-8.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-9.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-10.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-11.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-12.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-13.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-14.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-15.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-16.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-17.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-18.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-19.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-20.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-21.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-22.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-23.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-24.png",
      tags: ["All", "History"],
    },
    {
      src: "/images/An/His/An-His-25.png",
      tags: ["All", "History"],
    },

    {
      src: "/images/An/Vil/An-Vil-1.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-2.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-3.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-4.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-5.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-6.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-7.png",
      tags: ["All", "Village"],
    },
    {
      src: "/images/An/Vil/An-Vil-8.png",
      tags: ["All", "Village"],
    },
  ];

  const filters = [
    { key: "all", label: t("filters.all") },
    { key: "History", label: t("filters.history") },
    { key: "Village", label: t("filters.village") }, // Add images with this tag later
  ];

  const filteredImages =
    activeIndex === null || filters[activeIndex].key === "all"
      ? images
      : images.filter((image) => image.tags.includes(filters[activeIndex].key));

  const handleFilterClick = (index) => setActiveIndex(index);
  const handleImageClick = (image) => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <>
      <Navbar />
      <div className="location-page">
        {/* Header */}
        <header className="header">
          <h1>{t("ancient.title")}</h1>
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
          {filteredImages.map((image, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="card-img"
                onContextMenu={(e) => e.preventDefault()} // Disable right-click
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={handleCloseModal}>
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt="Selected"
                className="modal-img"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AncientPage;
