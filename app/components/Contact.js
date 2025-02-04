"use client"; // Add this directive at the top

import React, { useState } from "react";
import "../components/styles/Contact.css";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"; // Import icons

const ContactForm = () => {
  const { t } = useTranslation("contact"); // Use 'contact' namespace

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert(t("form.fields.consent")); // Translated consent message
      return;
    }

    try {
      const response = await fetch(
        "https://film-work-deployment-latest.onrender.com/api/v1/forum",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        alert(t("form.successMessage")); // Add success translation
      } else {
        alert(t("form.errorMessage")); // Add error translation
      }
    } catch (error) {
      alert(t("form.unexpectedError")); // Add unexpected error translation
    }
  };

  return (
    <div className="contact-container" id="contact">
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
      <title>Filmworks Azerbaijan</title>

      <div className="contact-form-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h5 className="form-title">{t("form.title")}</h5>
          <h2 className="form-header">{t("form.header")}</h2>

          <label htmlFor="name">{t("form.fields.name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{t("form.fields.email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@website.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">{t("form.fields.phone")}</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="555-555-5555"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">{t("form.fields.message")}</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="form-consent">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label htmlFor="consent" style={{ marginLeft: "5px" }}>
              {t("form.fields.consent")}
            </label>
          </div>

          <button type="submit" className="submit-button">
            {t("form.submit")}
          </button>
        </form>
      </div>

      <div className="contact-info-right">
        <h2>{t("info.contact")}</h2>
        <p>
          <strong>
            <a href="mailto:info@adzone.az" style={{ color: "inherit" }}>
              {t("info.email")}: info@filmworks.az
            </a>
          </strong>
        </p>

        <p>
          <strong>
            <a href="tel:+994102554396" style={{ color: "inherit" }}>
              {t("info.phone")}: +994102554396
            </a>
          </strong>
        </p>

        <p>
          <strong>{t("info.address")}:</strong> 69E Uzeyir Hajibeyli street,
          Baku, Azerbaijan
        </p>

        <p>
          <strong>{t("info.businessDays")}:</strong>
        </p>
        <p>{t("info.days.monday")}</p>
        <p>{t("info.days.tuesday")}</p>
        <p>{t("info.days.wednesday")}</p>
        <p>{t("info.days.thursday")}</p>
        <p>{t("info.days.friday")}</p>
        <p>{t("info.days.saturday")}</p>
        <p>{t("info.days.sunday")}</p>

        <div className="social-links">
          <a
            href="https://www.instagram.com/filmworks.az/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://www.youtube.com/@FilmworksAzerbaijan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://www.linkedin.com/company/filmworks-azerbaijan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
