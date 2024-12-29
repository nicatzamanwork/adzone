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
          <h2 className="about-title">High filming accessibility</h2>
          <p className="about-description">
            Filming in Azerbaijan is a cost-effective choice thanks to its
            convenient transport infrastructure, ease of logistics, and strong
            government support. Azerbaijan boasts an excellent transport
            network, with modern airports and well-developed road and rail
            systems. This makes it easy and quick for film crews, equipment, and
            gear to move around. Located in the heart of the Caucasus, the
            country is easily accessible from both Europe and Asia,
            significantly reducing travel time between different locations. With
            a good network of highways and an efficient system for storage and
            transportation of equipment, all processes run smoothly with minimal
            delays and complications.
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
          <img src="images/High access.jpg" alt="Office Environment" />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
