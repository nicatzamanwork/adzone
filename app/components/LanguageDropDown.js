"use client";

import { useState, useEffect, useRef } from "react";
import i18n from "../../i18n";
import Image from "next/image";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const languages = [
    { code: "en", label: "English", icon: "/images/gb.svg" },
    { code: "ru", label: "Русский", icon: "/images/ru.svg" },
  ];

  // Set initial language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language
    localStorage.setItem("language", lang); // Save the language to localStorage
    setIsOpen(false); // Close dropdown
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = localStorage.getItem("language") || "en";

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
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
          src={languages.find((lang) => lang.code === currentLang).icon}
          alt="Language Icon"
          width={20}
          height={15}
        />
        <span
          className="language-label"
          style={{
            marginLeft: "10px",
          }}
        >
          {languages.find((lang) => lang.code === currentLang).label}
        </span>
      </div>

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
                  lang.code === currentLang ? "#f0f0f0" : "transparent",
              }}
            >
              <Image src={lang.icon} alt={lang.label} width={20} height={15} />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                {lang.label}
              </span>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .language-label {
          display: none;
        }

        @media (max-width: 768px) {
          .language-label {
            display: inline;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
