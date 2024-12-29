import "../components/styles/InternalService.css"; // Import global CSS
import Link from "next/link";
export default function GalleryMain() {
  const cards = [
    {
      title: "Location Scouting",
      description: "Experience serene forest locations for your scenes.",
      image: "/images/Ateshgah.jpg",
      link: "/location-scouting",
    },
    {
      title: "Logistc Support",
      description: "Capture the energy of vibrant urban locations.",
      image: "/images/fullscale.jpg",
      link: "/full-cycle-video",
    },
  ];

  return (
    <>
      <div className="location-page">
        {/* Cards Section */}
        <div className="card-grid">
          <div className="card-grid">
            {cards.map((card, index) => (
              <Link href={card.link} key={index} className="card">
                <img src={card.image} alt={card.title} className="card-img" />
                <h2>{card.title} &gt;</h2>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
