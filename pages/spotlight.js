import Image from "next/image";
import "./blogPage.css"; // global stylesheet
import Navbar from "../app/components/Navbar";

const Spotlight = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <main className="content">
          <header className="header">
            <h2>Spotlight on Baku: The Perfect Urban Filming Destination</h2>
            <Image
              src="/images/bakunight.jpg"
              alt="Rich Cultural Heritage"
              width={800}
              height={450}
              priority
            />
          </header>
          <article className="article">
            <h3>A Fusion of Old and New</h3>
            <p>
              One of Baku’s defining characteristics is its seamless fusion of
              ancient and modern aesthetics. The city’s UNESCO-listed Old City
              (Icherisheher), with its winding cobblestone streets, traditional
              caravanserais, and the iconic Maiden Tower, provides a timeless
              backdrop for historical dramas and period pieces.
            </p>
            <p>
              Contrast this with the futuristic Flame Towers, the sleek curves
              of the Heydar Aliyev Center designed by Zaha Hadid, and the
              cutting-edge skyline, and you have a perfect setting for sci-fi
              thrillers or contemporary dramas. Few cities can claim to house
              such an eclectic mix of architectural styles within such close
              proximity.
            </p>

            <h3>Diverse Urban Landscapes</h3>
            <ul>
              <li>
                <strong>The Boulevard:</strong> This picturesque waterfront
                promenade stretches along the Caspian Sea, offering sweeping
                views perfect for romantic sunsets or reflective moments.
              </li>
              <li>
                <strong>The Land of Fire:</strong> Azerbaijan’s moniker as the
                “Land of Fire” is brought to life at the Yanar Dag (Burning
                Mountain), a natural gas fire that has been burning for
                millennia. This location adds an ethereal, almost otherworldly
                feel to any project.
              </li>
              <li>
                <strong>Industrial Chic:</strong> For grittier, urban stories,
                Baku’s industrial zones and Soviet-era buildings provide stark,
                textured settings, ideal for action scenes or dystopian
                narratives.
              </li>
              <li>
                <strong>Suburbs and Countryside:</strong> Just outside the city,
                lush greenery and the Gobustan National Park with its ancient
                petroglyphs offer striking contrasts to the urban core.
              </li>
            </ul>

            <h3>Strategic Location and Accessibility</h3>
            <p>
              Baku’s geographical location makes it a strategic filming hub,
              bridging East and West. The city is easily accessible from Europe,
              Asia, and the Middle East, with a well-connected international
              airport and growing transport infrastructure. Additionally, the
              local government is committed to fostering the film industry by
              offering competitive incentives, streamlined permits, and
              logistical support to international production teams.
            </p>

            <h3>World-Class Facilities and Talent</h3>
            <p>
              Baku is home to a growing number of state-of-the-art studios and
              post-production facilities, making it a one-stop destination for
              end-to-end film production. Local crews are experienced,
              multilingual, and highly skilled, ensuring international
              filmmakers can access top-tier talent without complications.
            </p>
            <p>
              The city’s vibrant creative community also provides an array of
              on-screen talent, from seasoned professionals to enthusiastic
              extras, adding authenticity and depth to any project.
            </p>

            <h3>A Warm Welcome</h3>
            <p>
              Beyond its technical and aesthetic offerings, what truly sets Baku
              apart is its hospitality. Visitors to the city often comment on
              the warmth and friendliness of the Azerbaijani people, who are
              eager to share their culture and traditions. From savoring local
              delicacies like plov and kebabs to exploring bustling markets, the
              Baku experience extends far beyond the camera lens.
            </p>

            <h3>Success Stories</h3>
            <p>
              Baku’s appeal as a filming destination has already caught the eye
              of major film and television productions. The city has featured in
              several high-profile projects, from “The World Is Not Enough,”
              showcasing its dramatic cityscapes, to local productions that
              highlight its unique charm. As international filmmakers continue
              to discover the potential of this dynamic city, its reputation as
              a cinematic hub is only growing.
            </p>

            <h3>Conclusion</h3>
            <p>
              Baku is a city that inspires creativity. With its blend of ancient
              traditions and futuristic design, diverse filming locations, and
              commitment to fostering the film industry, it offers something for
              every filmmaker.
            </p>
            <p>
              Whether you’re planning a big-budget production or an intimate
              indie film, Baku provides a canvas that can bring any vision to
              life.
            </p>
            <p>
              As more filmmakers set their sights on this vibrant city, the
              question remains: Is Baku ready to become the next global
              filmmaking capital? Judging by its growing success, the answer is
              a resounding yes.
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default Spotlight;
