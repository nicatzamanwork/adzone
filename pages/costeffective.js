import React from "react";
import "../app/components/styles/About.css";
import Navbar from "../app/components/Navbar";
import Link from "next/link";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="about-title">Cost-effective filming</h2>
          <p className="about-description">
            Filming movies, TV series, and music videos in Azerbaijan is an
            economically advantageous choice. The cost of renting filming
            locations, equipment, and services from local specialists is
            significantly lower than in Europe or North America, allowing for
            substantial savings on production costs without compromising
            quality. Azerbaijan also offers highly qualified professionals who
            are well-versed in international standards and work at competitive
            rates. In addition, the country boasts a diverse range of unique
            natural and architectural landscapes, perfect for shooting various
            scenes—from ancient Eastern cities to futuristic metropolises. This
            helps avoid additional costs for travel or renting extra locations,
            saving both time and money, while expanding the creative
            possibilities for your project
          </p>
          <a href="#contact" className="about-link" onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              window.location.href = "/#contact"; // Navigate to the home page with the contact section
            }}>
            Get in touch
          </a>
        </div>
        <div className="about-image">
          <img src="images/cost-effective.jpeg" alt="Office Environment" />
        </div>
      </section>
    </>
  );
};

export default About;
