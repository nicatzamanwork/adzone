import "../components/styles/Services.css";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" style={{ background: "#f9f9f9", padding: "0rem" }}>
      <h2
        style={{
          textAlign: "left",
          fontSize: "2rem",
          marginBottom: "2rem",
          padding: "32px",
        }}
      >
        End-to-End Support for International Productions
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Service 1 */}
        <Link href="/location-scouting" passHref>
          <div
            className="service-box"
            style={{
              flex: "1",
              maxWidth: "350px",
              textAlign: "left",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <img
              src="/images/Ateshgah.jpg"
              alt="Location Scouting"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ color: "black" }}>
                Location Scouting{" "}
                <img src="images/arrow.png" style={{ width: "15px" }} />
              </h3>
              <p style={{ color: "black" }}>
                Discover stunning locations for your next project.
              </p>
            </div>
          </div>
        </Link>

        {/* Service 2 */}
        <Link href="/logistics-support" passHref>
          <div
            className="service-box"
            style={{
              flex: "1",
              maxWidth: "350px",
              textAlign: "left",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <img
              src="/images/scouting.jpg"
              alt="Logistics Support"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ color: "black" }}>
                Logistics Support{" "}
                <img src="images/arrow.png" style={{ width: "15px" }} />
              </h3>
              <p style={{ color: "black" }}>
                We help you with expert planning and execution.
              </p>
            </div>
          </div>
        </Link>

        {/* Service 3 */}
        <Link href="/full-cycle-video" passHref>
          <div
            className="service-box"
            style={{
              flex: "1",
              maxWidth: "350px",
              textAlign: "left",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <img
              src="/images/fullscale.jpg"
              alt="Full-Cycle Video Production"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ color: "black" }}>
                Full-Cycle Video Production{" "}
                <img src="images/arrow.png" style={{ width: "15px" }} />
              </h3>
              <p style={{ color: "black" }}>
                From pre-production to post-production support.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
