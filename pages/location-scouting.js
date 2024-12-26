import React from "react";
import Navbar from "../app/components/Navbar";
import Contact from "../app/components/Contact"; // Ensure the Navbar is imported
import "../app/components/styles/About.css";
import "../app/components/styles/Blog.css";
import "../app/components/styles/Services.css";

const Blog = () => {
  return (
    <>
      <Navbar />
      <header
        className="header"
        style={{ backgroundImage: `url('/images/Ateshgah.jpg')` }}
      >
        <div className="header-overlay">
          <div className="header-content">
            <h1>Location Scouting</h1>
            <p>Your Next Film Destination</p>
          </div>
        </div>
      </header>
      <section className="services-section" id="services">
        <div className="services-content">
          <div className="service-item">
            <h3>Initial Consultation:</h3>
            <p>
              We listen to your vision, project goals, and budget to provide
              tailored location recommendations.
            </p>
          </div>

          <div className="service-item">
            <h3>
              Location Scouting for Film, TV, music video, and commercial:
            </h3>
            <p>
              Whether it’s a city street, a secluded forest, or a modern office,
              we find the perfect backdrop for your scene and ensure the ideal
              space to tell your visual story.
            </p>
          </div>

          <div className="service-item">
            <h3>Site Visits:</h3>
            <p>
              We schedule visits and offer detailed reports and photos of
              potential locations.
            </p>
          </div>

          <div className="service-item">
            <h3>Film Permits:</h3>
            <p>
              We handle location permits, paperwork, and logistical details to
              ensure a smooth shoot day.
            </p>
          </div>
        </div>
        <div className="services-image">
          <img
            src="images/logisticSupport.jpeg"
            alt="Office Environment"
            className="services-image-content"
          />
        </div>
      </section>

      <section id="services" style={{ background: "#f9f9f9", padding: "2rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          End-to-End Support for International Productions
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Service 2 */}
          <div
            className="service-box"
            style={{
              flex: "1",
              maxWidth: "400px",
              textAlign: "center",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/scouting.jpg"
              alt="Logistics Support"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3>Logistics Support</h3>
              <p>We help you with expert planning and execution.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="service-box"
            style={{
              flex: "1",
              maxWidth: "400px",
              textAlign: "center",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/fullscale.jpg"
              alt="Full-Cycle Video Production"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3>Full-Cycle Video Production</h3>
              <p>From pre-production to post-production support.</p>
            </div>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
};

export default Blog;
