import React from "react";
import Navbar from "../app/components/Navbar"; // Ensure the Navbar is imported
import Contact from "../app/components/Contact";
import InternalServiceLogistic from "../app/components/InternalServicesLogistic";
import "../app/components/styles/About.css";
import "../app/components/styles/Blog.css";
import "../app/components/styles/Services.css";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Navbar />
      <header
        className="header"
        style={{ backgroundImage: `url('/images/scouting.jpg')` }}
      >
        <div className="header-overlay">
          <div className="header-content">
            <h1>Logistic Support</h1>
          </div>
        </div>
      </header>
      <section className="services-section-internal" id="services">
        <div className="services-content">
          <div className="service-intro">
            <img
              src="/images/ancient/logisticsupportred.png"
              alt="Location Scouting Icon"
              className="internal-service-icon"
            />
            <p>
              Filmworks Azerbaijan provides comprehensive logistics support for
              smooth and successful production.
            </p>
          </div>

          <div className="service-item">
            <h3>Travel Arrangements</h3>
            <p>
              We handle transportation logistics for crew members, equipment,
              and talent, ensuring smooth travel between locations.
            </p>
          </div>

          <div className="service-item">
            <h3>Catering & Accommodation</h3>
            <p>
              We can recommend or arrange local catering services and
              accommodations for your crew and talent.
            </p>
          </div>

          <div className="service-item">
            <h3>Crew & Equipment Coordination</h3>
            <p>
              We facilitate the logistics of getting your crew and equipment to
              the location, ensuring timely and efficient setup.
            </p>
          </div>

          <div className="service-item">
            <h3>Parking & Traffic Management</h3>
            <p>
              We plan parking arrangements for large crews or vehicles, manage
              traffic flow around the location, and coordinate with local
              authorities if necessary.
            </p>
          </div>
        </div>
      </section>

      <InternalServiceLogistic />

      <Contact />
    </>
  );
};

export default Blog;
