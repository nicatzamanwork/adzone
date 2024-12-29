import "../components/styles/Services.css";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h5 className="about-subtitle">YOUR VISION, OUR EXPERTISE</h5>
      <h2 className="services-title">
        We provide end-to-end support for international film productions in
        Azerbaijan
      </h2>
      <div className="service-boxes-container">
        {/* Service 1 */}
        <Link href="/location-scouting" passHref>
          <div className="service-box">
            <img
              src="/images/Ateshgah.jpg"
              alt="Location Scouting"
              className="service-image"
            />
            <div className="service-content">
              <h3>
                Location Scouting{" "}
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </h3>
              <p>Discover stunning locations for your next project.</p>
            </div>
          </div>
        </Link>

        {/* Service 2 */}
        <Link href="/logistics-support" passHref>
          <div className="service-box">
            <img
              src="/images/scouting.jpg"
              alt="Logistics Support"
              className="service-image"
            />
            <div className="service-content">
              <h3>
                Logistics Support{" "}
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </h3>
              <p>We help you with expert planning and execution.</p>
            </div>
          </div>
        </Link>

        {/* Service 3 */}
        <Link href="/full-cycle-video" passHref>
          <div className="service-box">
            <img
              src="/images/fullscale.jpg"
              alt="Full-Cycle Video Production"
              className="service-image"
            />
            <div className="service-content">
              <h3>
                Full-Cycle Production{" "}
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </h3>
              <p>From pre-production to post-production support.</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
