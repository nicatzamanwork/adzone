import "../app/components/styles/Navbar.css";
import "../app/components/styles/Locations.css";
import Link from "next/link";
import Navbar from "../app/components/Navbar";

const Locations = () => {
  return (
    <>
      <Navbar />
      <section id="locations">
        <h2>Blogs</h2>
        <div className="locations-container">
          {/* Card 1 */}
          <div className="location-card">
            <Link href="/howtofilm">
              <img
                src="/images/Ateshgah (15).jpg"
                alt="Rich Cultural Heritage"
              />
              <div className="overlay">
                <h3 style={{ color: "white" }}>
                  How to Film in the Land of Fire
                </h3>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="location-card">
            <Link href="/petroglygps">
              <img src="/images/land.JPG" alt="Cost-effective Filming" />
              <div className="overlay">
                <h3 style={{ color: "white" }}>
                  From Petroglyphs to Palaces: Exploring Azerbaijan’s Cinematic
                  Landscapes
                </h3>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="location-card">
            <Link href="/tenbestfilming">
              <img
                src="/images/Khinalig (12) (1).jpg"
                alt="Diverse and Unique Locations"
              />
              <div className="overlay">
                <h3 style={{ color: "white" }}>
                  10 Best Filming Locations in Azerbaijan
                </h3>
              </div>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="location-card">
            <Link href="/spotlight">
              <img
                src="/images/bakunight.jpg"
                alt="High Filming Accessibility"
              />
              <div className="overlay">
                <h3 style={{ color: "white" }}>
                  Spotlight on Baku: The Perfect Urban Filming Destination
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
