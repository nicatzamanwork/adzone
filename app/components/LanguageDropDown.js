"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to 'en'
  const dropdownRef = useRef();

  const languages = [
    { code: "en", icon: "/images/gb.svg" },
    { code: "ru", icon: "/images/ru.svg" },
  ];

  const handleLanguageChange = async (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false); // Close dropdown on selection

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/content/RichCulturalHeritage?lang=${lang}`,
        {
          method: "GET",
          headers: {
            "Accept-Language": "en",
          },
        }
      );

      // Read the response as plain text
      const text = await response.text();
      console.log("Raw Response:", text); // Log the raw response for debugging

      if (response.ok) {
        try {
          const data = JSON.parse(text); // Attempt to parse JSON
          console.log("API Response:", data);
        } catch (error) {
          console.error(
            "Failed to parse JSON. Response might not be JSON:",
            text
          );
        }
      } else {
        console.error(
          `API Error: ${response.status} - ${response.statusText}`,
          text
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLangData =
    languages.find((lang) => lang.code === selectedLanguage) || languages[0];

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      {/* Selected Language */}
      <div
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px 15px",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: "white",
        }}
      >
        <Image
          src={selectedLangData.icon}
          alt={selectedLangData.label}
          width={20}
          height={15}
        />
        <span style={{ marginLeft: "10px" }}>{selectedLangData.label}</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginTop: "4px",
            width: "100%",
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                cursor: "pointer",
                backgroundColor:
                  lang.code === selectedLanguage ? "#f0f0f0" : "transparent",
              }}
            >
              <Image src={lang.icon} alt={lang.label} width={20} height={15} />
              <span style={{ marginLeft: "10px" }}>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
