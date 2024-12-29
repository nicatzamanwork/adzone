import React from "react";
import "../app/components/styles/About.css";
import Navbar from "../app/components/Navbar";
import Contact from "../app/components/Contact";
import Link from "next/link";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="about-title">Rich cultural heritage</h2>
          <p className="about-description">
            Azerbaijan is a country where East meets West, tradition meets
            modernity, creating a rich cultural heritage. Here, in the heart of
            the Caucasus, history blends with the present, and cultural
            diversity is reflected in both architecture and everyday life.
            Muslim and pagan architecture, mosques, temples, and fortresses are
            an integral part of the cultural landscape. In Baku, ancient
            buildings coexist with modern structures, creating a unique
            atmosphere in the city. Azerbaijan is not only about history but
            also a country with modern infrastructure that fits seamlessly into
            its heritage. The variety of locations and cultural layers offers
            interesting opportunities for creating unique projects.
          </p>
          <a
            href="/gallerymain"
            className="about-link"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              window.location.href = "/gallerymain"; // Navigate to the home page with the contact section
            }}
          >
            Catalog
          </a>
        </div>
        <div className="about-image">
          <img src="images/7.jpg" alt="Office Environment" />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
