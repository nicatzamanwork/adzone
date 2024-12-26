import React from "react";
import Navbar from "../app/components/Navbar"; // Ensure the Navbar is imported
import Contact from "../app/components/Contact";
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
            <h3>Travel Arrangements:</h3>
            <p>
              We handle transportation logistics for crew members, equipment,
              and talent, ensuring smooth travel between locations.
            </p>
          </div>

          <div className="service-item">
            <h3>Catering & Accommodation:</h3>
            <p>
              We can recommend or arrange local catering services and
              accommodations for your crew and talent.
            </p>
          </div>

          <div className="service-item">
            <h3>Crew & Equipment Coordination:</h3>
            <p>
              We facilitate the logistics of getting your crew and equipment to
              the location, ensuring timely and efficient setup.
            </p>
          </div>

          <div className="service-item">
            <h3>Parking & Traffic Management:</h3>
            <p>
              We plan parking arrangements for large crews or vehicles, manage
              traffic flow around the location, and coordinate with local
              authorities if necessary.
            </p>
          </div>
        </div>
        <div className="services-image">
          <img
            src="images/logisticSupport.jpeg"
            alt="Logistics Support"
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
          {/* Service 1 */}
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
              src="/images/Ateshgah.jpg"
              alt="Location Scouting"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3>Location Scouting</h3>
              <p>Discover stunning locations for your next project.</p>
            </div>
          </div>

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
