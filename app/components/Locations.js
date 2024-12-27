import "../components/styles/Locations.css";
import "../components/styles/About.css";
import Link from "next/link";
const Locations = () => {
  return (
    <section id="locations">
      <h5 className="about-subtitle">WHY AZERBAIJAN</h5>
      <h2>
        Experience diverse landscapes and rich culture for your next project
      </h2>
      <div className="locations-container">
        {/* Card 1: Overlay on the Image */}
        <div className="location-card">
          <Link href="/richcultural">
            <img src="/images/7.jpg" alt="Rich Cultural Heritage" />
            <div className="overlay">
              <h3 style={{ color: "white" }}>Rich Cultural Heritage</h3>
            </div>
          </Link>
        </div>

        {/* Card 2: Content Below the Image */}
        <div className="location-card">
          <Link href="/costeffective">
            <img
              src="/images/cost-effective.jpeg"
              alt="Cost-effective Filming"
            />
            <div className="overlay">
              <h3 style={{ color: "white" }}>Cost-effective Filming</h3>
            </div>
          </Link>
        </div>

        {/* Card 3: Overlay on the Image */}
        <div className="location-card">
          <Link href="/diverselocations">
            <img
              src="/images/location.jpeg"
              alt="Diverse and Unique Locations"
            />
            <div className="overlay">
              <h3 style={{ color: "white" }}>Diverse and Unique Locations</h3>
            </div>
          </Link>
        </div>

        {/* Card 4: Content Below the Image */}
        <div className="location-card">
          <Link href="/highfilmin">
            <img
              src="/images/High access.jpg"
              alt="High Filming Accessibility"
            />
            <div className="overlay">
              <h3 style={{ color: "white" }}>High Filming Accessibility</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
