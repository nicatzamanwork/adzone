import React, { useState } from "react";
import Navbar from "../app/components/Navbar";
import "./LocationPage.css"; // Ensure the file path is correct
import { useTranslation } from "react-i18next";

const LocationPage = () => {
  const { t } = useTranslation("gallery");
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const images = [
    { src: "7 (1).jpg", tags: ["History"], title: "Sheki Khan Palace" },
    { src: "7.jpg", tags: ["Village"], title: "Sheki Khan Palace" },
    { src: "8 (2).jpg", tags: ["Desert"], title: "Three Saints Church" },
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
    { src: "Baksovet_1.jpeg", tags: ["Historical"], title: "Baksovet" },
    { src: "Baksovet_2.jpeg", tags: ["Historical"], title: "Baksovet" },
    { src: "Chiragli_2.jpeg", tags: ["Historical"], title: "Chiragli" },
    { src: "Chiragli.jpeg", tags: ["Historical"], title: "Chiragli" },
    { src: "Dastafur.jpeg", tags: ["Nature"], title: "Dastafur" },
    { src: "fontain square_1.jpeg", tags: ["City"], title: "Fountain Square" },
    { src: "Gobustan.jpg", tags: ["Historical"], title: "Gobustan" },
    { src: "Icerisheher_1.jpeg", tags: ["Historical"], title: "Icherisheher" },
    { src: "Icerisheher_2.jpeg", tags: ["Historical"], title: "Icherisheher" },
    { src: "Icerisheher_3.jpeg", tags: ["Historical"], title: "Icherisheher" },
    { src: "Icerisheher_4.jpeg", tags: ["Historical"], title: "Icherisheher" },
    { src: "Icerisheher_5.jpeg", tags: ["Historical"], title: "Icherisheher" },
    { src: "Icerisheher_6.jpeg", tags: ["Historical"], title: "Icherisheher" },
    { src: "Icheribazar_gah_1.jpeg", tags: ["Bazaar"], title: "Icheribazar" },
    { src: "Icheribazar_gah_2.jpeg", tags: ["Bazaar"], title: "Icheribazar" },
    { src: "Icheribazar_gah_3.jpeg", tags: ["Bazaar"], title: "Icheribazar" },
    {
      src: "Khizi mountain_1.jpeg",
      tags: ["Mountain"],
      title: "Khizi Mountain",
    },
    {
      src: "Khizi mountain_2.jpeg",
      tags: ["Mountain"],
      title: "Khizi Mountain",
    },
    {
      src: "Khizi mountain_3.jpeg",
      tags: ["Mountain"],
      title: "Khizi Mountain",
    },
    {
      src: "Khizi mountain_4.jpeg",
      tags: ["Mountain"],
      title: "Khizi Mountain",
    },
    { src: "Mud volcanoes (14).jpg", tags: ["Nature"], title: "Mud Volcanoes" },
    {
      src: "Nizami mausoleum_1.jpeg",
      tags: ["Historical"],
      title: "Nizami Mausoleum",
    },

    { src: "Qusar_1.jpeg", tags: ["Mountain"], title: "Qusar" },
    { src: "Qusar_2.jpeg", tags: ["Mountain"], title: "Qusar" },
    { src: "Saint George.jpeg", tags: ["Historical"], title: "Saint George" },
    { src: "Shahdag_1.jpeg", tags: ["Mountain"], title: "Shahdag" },
    { src: "Shahdag_2.jpeg", tags: ["Mountain"], title: "Shahdag" },
    { src: "Shahdag_3.jpeg", tags: ["Mountain"], title: "Shahdag" },
    { src: "Soyuqbulag.jpeg", tags: ["Nature"], title: "Soyuqbulag" },
    { src: "Torqovaya_2.jpeg", tags: ["City"], title: "Torqovaya" },
    { src: "Torqovaya_3 (1).jpeg", tags: ["City"], title: "Torqovaya" },
    { src: "Torqovaya_3.jpeg", tags: ["City"], title: "Torqovaya" },
    { src: "Tufandag_1.jpeg", tags: ["Mountain"], title: "Tufandag" },
    { src: "tufandag_2.jpeg", tags: ["Mountain"], title: "Tufandag" },
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

export default LocationPage;
