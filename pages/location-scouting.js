import React from "react";
import Navbar from "../app/components/Navbar";
import Contact from "../app/components/Contact";

const InternalService = () => {
  return (
    <>
      <Navbar />
      <header
        className="internal-header"
        style={{ backgroundImage: `url('/images/Ateshgah.jpg')` }}
      >
        <div className="internal-header-overlay">
          <div className="internal-header-content">
            <h1>Location Scouting</h1>
          </div>
        </div>
      </header>
      <section className="internal-services-section" id="services">
        <div className="internal-services-content">
          <div className="internal-service-item">
            <img
              src="/images/locationScoutingIcon.png"
              alt="Location Scouting Icon"
              className="internal-service-icon"
            />
            <h3>Initial Consultation</h3>
            <p>
              We listen to your vision, project goals, and budget to provide
              tailored location recommendations.
            </p>
          </div>

          <div className="internal-service-item">
            <h3>
              Location Scouting for Film, TV, Music Videos, and Commercials
            </h3>
            <p>
              Whether it’s a city street, a secluded forest, or a modern office,
              we find the perfect backdrop for your scene and ensure the ideal
              space to tell your visual story.
            </p>
          </div>

          <div className="internal-service-item">
            <h3>Site Visits</h3>
            <p>
              We schedule visits and offer detailed reports and photos of
              potential locations.
            </p>
          </div>

          <div className="internal-service-item">
            <h3>Film Permits</h3>
            <p>
              We handle location permits, paperwork, and logistical details to
              ensure a smooth shoot day.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <style jsx>{`
        /* Header Styling */
        .internal-header {
          background-size: cover;
          background-position: center;
          height: 60vh;
          position: relative;
        }

        .internal-header-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 2rem;
        }

        .internal-header-content {
          color: #fff;
        }

        .internal-header-content h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0;
        }

        /* Services Section */
        .internal-services-section {
          padding: 4rem 2rem;
          background: #f9f9f9;
          text-align: center;
        }

        .internal-services-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .internal-service-item {
          margin-bottom: 2rem;
        }

        .internal-service-icon {
          width: 80px;
          height: auto;
          margin: 0 auto 1rem;
        }

        .internal-service-item h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .internal-service-item p {
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .internal-header-content h1 {
            font-size: 2rem;
          }

          .internal-service-icon {
            width: 60px;
          }

          .internal-service-item h3 {
            font-size: 1.2rem;
          }

          .internal-service-item p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default InternalService;
