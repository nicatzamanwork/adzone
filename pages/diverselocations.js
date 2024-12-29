import React from "react";
import "../app/components/styles/About.css";
import Navbar from "../app/components/Navbar";
import Link from "next/link";
import Contact from "../app/components/Contact";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="about-title">Diverse and unique locations</h2>
          <p className="about-description">
            Azerbaijan is a true land of contrasts, where different eras and
            styles blend in an astonishing way. Majestic natural landscapes,
            ancient Muslim and pagan architecture, elegant 19th-century
            buildings, Soviet-era heritage, and futuristic structures that seem
            to have come straight from the screens of science fiction films all
            coexist here. This country is the perfect film location for any
            project: history movies to adventure, action sci-fi and romantic
            genres.
          </p>
          <a
            href="#contact"
            className="about-link"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              window.location.href = "/#contact"; // Navigate to the home page with the contact section
            }}
          >
            Get in touch
          </a>
        </div>
        <div className="about-image">
          <img src="images/location.jpeg" alt="Office Environment" />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
