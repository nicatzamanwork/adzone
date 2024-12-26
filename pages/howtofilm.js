// components/HowToFilm/HowToFilm.js
import Image from "next/image";
import "./blogPage.css"; // global stylesheet
import Navbar from "../app/components/Navbar"; 

const HowToFilm = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <main className="content">
          <header className="header">
            <h2>How to Film in the Land of Fire</h2>
            <Image
              src="/images/Ateshgah (15).jpg"
              alt="Rich Cultural Heritage"
              width={800}
              height={450}
              priority
            />
          </header>
          <article className="article">
            <h3>Why Choose Azerbaijan for Filming?</h3>
            <p>
              Azerbaijan’s appeal lies in its diversity. The country seamlessly blends ancient and modern worlds, offering everything from prehistoric petroglyphs to cutting-edge architecture. Whether you’re looking for medieval streets, grand palaces, surreal natural phenomena, or sleek urban skylines, Azerbaijan delivers.
            </p>
            <p>
              Its strategic location at the crossroads of Europe and Asia, coupled with government support for the film industry, makes it a rising star in global cinema.
            </p>

            <h3>Step 1: Plan Your Locations</h3>
            <p>To film in Azerbaijan, it’s essential to research and plan locations based on your project’s needs. Here are some standout filming spots:</p>

            <h4>Historical Sites</h4>
            <ul>
              <li><strong>Gobustan National Park:</strong> Home to ancient petroglyphs and unique rock formations, perfect for documentaries, historical dramas, or sci-fi visuals.</li>
              <li><strong>Icherisheher (Old City):</strong> A UNESCO World Heritage Site in Baku, offering narrow cobblestone streets, the Maiden Tower, and the Palace of the Shirvanshahs for period films or atmospheric settings.</li>
              <li><strong>Ateshgah (Fire Temple):</strong> One of the most fascinating locations for historical content, known for its rich history and cultural significance.</li>
            </ul>

            <h4>Natural Wonders</h4>
            <ul>
              <li><strong>The Khizi Mountains:</strong> Their otherworldly landscape makes them ideal for sci-fi or futuristic films.</li>
              <li><strong>Mud Volcanoes:</strong> Azerbaijan has the world’s largest concentration of these natural phenomena, offering surreal, alien-like landscapes.</li>
              <li><strong>Caucasus Mountains:</strong> Stunning vistas and traditional villages like Khinalig make this region perfect for nature-focused storytelling.</li>
            </ul>

            <h4>Modern Marvels</h4>
            <ul>
              <li><strong>Heydar Aliyev Center:</strong> A futuristic architectural masterpiece by Zaha Hadid, ideal for avant-garde or sci-fi scenes.</li>
              <li><strong>Flame Towers:</strong> Illuminating the skyline with fiery LED displays, adding a dramatic modern touch to urban scenes.</li>
              <li><strong>Crescent Bay:</strong> A blend of modern architecture and luxury, offering a visually captivating setting.</li>
            </ul>

            <h3>Step 2: Obtain Filming Permits</h3>
            <p>
              To film in Azerbaijan, you’ll need to secure the necessary permits. The process is straightforward, especially for international filmmakers. Here's what to do:
            </p>
            <ol>
              <li>Identify key locations and note any restrictions.</li>
              <li>Apply for permits with local authorities or hire a production service company.</li>
              <li>Include drone usage clearance if required.</li>
            </ol>

            <h3>Step 3: Partner with Local Production Services</h3>
            <p>
              Collaborating with local production companies can streamline your filmmaking process. They can assist with location scouting, securing permits, equipment rental, hiring local crew, and navigating cultural differences.
            </p>

            <h3>Step 4: Embrace the Local Culture</h3>
            <p>
              Filming in Azerbaijan isn’t just about visuals—it’s about immersing yourself in its culture. Engage with locals and enjoy traditional cuisine to inspire your creative process.
            </p>

            <h3>Step 5: Prepare for Climate and Terrain</h3>
            <p>
              Azerbaijan’s diverse geography means varying climates and terrains:
            </p>
            <ul>
              <li><strong>Urban areas:</strong> Hot summers and mild winters; pack accordingly for city shoots.</li>
              <li><strong>Mountains:</strong> Cold and snowy winters; ensure proper gear for high-altitude filming.</li>
              <li><strong>Deserts and volcanic areas:</strong> Prepare for heat and dry conditions.</li>
            </ul>

            <h3>Step 6: Focus on Post-Production Needs</h3>
            <p>
              Azerbaijan offers modern post-production facilities, but consider bringing specialized equipment or collaborating with local editors for authenticity.
            </p>

            <h3>Step 7: Respect the Environment and Heritage</h3>
            <p>
              Preserve the integrity of natural and cultural sites by following all regulations and guidelines to avoid damage.
            </p>

            <h3>Why the Land of Fire is Worth It</h3>
            <p>
              Filming in Azerbaijan is not just about capturing stunning visuals—it’s about telling a story enriched by the country’s culture, history, and natural beauty. Proper planning and local partnerships can elevate your project to new heights.
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default HowToFilm;
