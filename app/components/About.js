import React from "react";
import "../components/styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h5 className="about-subtitle">YOUR VISION, OUR EXPERTISE</h5>
        <h2 className="about-title">Unlock the beauty of Azerbaijan</h2>
        <p className="about-description">
          Filmworks Azerbaijan excels in providing top-notch film production and
          location services, tailored for international production companies.
          Our dedicated team is committed to ensuring a seamless experience,
          from location scouting to logistics and comprehensive production
          support. Discover the stunning landscapes and vibrant culture of
          Azerbaijan while we handle the details, allowing you to focus on
          bringing your creative vision to life.
        </p>
        <a href="#contact" className="about-link">
          Get in touch
        </a>
      </div>
      <div className="about-image">
        <img src="images/rich.jpg" alt="Office Environment" />
      </div>
    </section>
  );
};

export default About;
