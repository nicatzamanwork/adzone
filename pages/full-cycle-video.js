import React from "react";
import Navbar from "../app/components/Navbar"; // Ensure the Navbar is imported
import Contact from "../app/components/Contact";
import InternalServiceLogistic from "../app/components/InternalServicesLogistic";
import "../app/components/styles/About.css";
import "../app/components/styles/Blog.css";
import "../app/components/styles/Services.css";

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
          <p className="intro-text">
            With a team of experienced filmmakers, creatives, and technical
            experts, Filmworks Azerbaijan can help you to produce high-quality
            films, commercials, music videos, and branded content.
          </p>

          <div className="service-category">
            <img
              src="/images/ancient/prepro.png"
              alt="Pre-Production Icon"
              className="internal-service-icon"
            />
            <h3>Pre-production service</h3>
            <ul className="service-list">
              <li>
                <strong>Script Development:</strong> We work with you to develop
                and refine your script, ensuring that it aligns with your vision
                and goals.
              </li>
              <li>
                <strong>Concept & Storyboarding:</strong> From brainstorming to
                detailed storyboards, we map out every shot and sequence to
                visualize the project before filming begins.
              </li>
              <li>
                <strong>Casting:</strong> We assist with casting talent, from
                lead actors to extras, ensuring you get the perfect fit for your
                project.
              </li>
              <li>
                <strong>Provision of Equipment for Filming:</strong> We source
                any necessary equipment for you to ensure the shooting process
                goes exactly as you planned.
              </li>
              <li>
                <strong>Search for Film Crew:</strong> We gather a film crew
                consisting of all the necessary professionals for your project.
              </li>
              <li>
                <strong>Budgeting & Scheduling:</strong> Our team creates
                detailed production budgets and schedules to ensure your project
                stays on track and within budget.
              </li>
              <li>
                <strong>Set Design & Production Planning:</strong> From set
                construction to wardrobe and props, we ensure every detail is
                planned for seamless execution.
              </li>
            </ul>
          </div>

          <div className="service-category">
            <img
              src="/images/ancient/production.png"
              alt="Production Icon"
              className="internal-service-icon"
            />
            <h3>Production service</h3>
            <ul className="service-list">
              <li>
                <strong>Filming:</strong> Our experienced crew brings your
                script to life using state-of-the-art equipment. We handle all
                aspects of filming, from lighting and cinematography to
                direction and sound.
              </li>
              <li>
                <strong>Cinematography:</strong> We offer creative and technical
                expertise in camera work, lighting, and shot composition to
                capture stunning visuals.
              </li>
              <li>
                <strong>On-Set Coordination:</strong> Our team manages
                day-to-day operations, ensuring everything runs smoothly, from
                scheduling to coordinating with talent and crew.
              </li>
            </ul>
          </div>

          <div className="service-category">
            <img
              src="/images/ancient/post-production.jpg"
              alt="Post-Production Icon"
              className="internal-service-icon"
            />
            <h3>Post-Production Services</h3>
            <ul className="service-list">
              <li>
                <strong>Editing:</strong> Our talented editors craft your story
                by cutting and assembling the footage into a cohesive narrative
                that aligns with your vision.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <InternalServiceLogistic />
      <Contact />
    </>
  );
};

export default Blog;
