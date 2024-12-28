import Head from "next/head";
import Navbar from "../app/components/Navbar";
import "./gallerymain.css"; // Import global CSS
import Link from "next/link";
export default function GalleryMain() {
  const cards = [
    {
      title: "Urban",
      description: "Discover stunning mountain escapes for your project.",
      image: "/images/Khinalig (12) (1).jpg",
      link: "/gallery",
    },
    {
      title: "Europe",
      description: "Find beautiful beaches perfect for your next shoot.",
      image: "/images/Mud volcanoes (14).jpg",
      link: "/gallery",
    },

    {
      title: "Nature",
      description: "Experience serene forest locations for your scenes.",
      image: "/images/Khinalig (21).jpg",
      link: "/gallery",
    },
    {
      title: "Ancient",
      description: "Capture the energy of vibrant urban locations.",
      image: "/images/7 (1).jpg",
      link: "/gallery",
    },
  ];

  return (
    <>
      <Navbar />
      <Head>
        <title>Locations</title>
      </Head>
      <div className="location-page">
        {/* Header Section */}
        <header className="header">
          <h1 className="title">Locations</h1>
        </header>

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
