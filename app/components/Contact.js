"use client";

import React, { useState } from "react";
import "../components/styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState(null); // For handling submission status

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure consent is checked before submission
    if (!formData.consent) {
      alert("You must consent to submit the form.");
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
            phoneNumber: formData.phoneNumber, // Correct field for the backend
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
          consent: false,
        });
        alert("Your message has been sent successfully!");
      } else {
        setStatus("error");
        alert("There was an error submitting your message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h5 className="form-title">GET IN TOUCH</h5>
          <h2 className="form-header">We’re here to assist you!</h2>

          <label htmlFor="name" style={{ paddingTop: "10px" }}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email address *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@website.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber" // Corrected to match formData property
            placeholder="555-555-5555"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
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
            <label htmlFor="consent" style={{marginLeft: "5px"}}>
              I allow this website to store my submission so they can respond to
              my inquiry. *
            </label>
          </div>

          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>

      <div className="contact-info-right">
        <h2>Contact</h2>
        <p>
          <strong>
            <a
              href="mailto:info@adzone.az"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Email: info@adzone.az
            </a>
          </strong>
        </p>
        <p>
          <strong>Address:</strong> 69E Uzeyir Hajibeyli street, Baku, Azerbaijan
        </p>
        <p>
          <strong>Business Days:</strong>
        </p>
        <br />
        <p> Monday, 9 AM - 6 PM</p>
        <p> Tuesday, 9 AM - 6 PM</p>
        <p> Wednesday, 9 AM - 6 PM</p>
        <p> Thursday, 9 AM - 6 PM</p>
        <p> Friday, 9 AM - 6 PM</p>
        <p> Saturday, Closed</p>
        <p> Sunday, Closed</p>
      </div>
    </div>
  );
};

export default ContactForm;
