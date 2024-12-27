import React, { useState } from "react";
import Navbar from "../app/components/Navbar"; // Ensure the Navbar is imported
import Contact from "../app/components/Contact";
import "../app/components/styles/Blog.css";
import "../pages/full-cycle.css";
import "../app/components/styles/Services.css";

const Blog = () => {
  return (
    <>
      <Navbar />

      <header
        className="header"
        style={{ backgroundImage: `url('/images/fullscale.jpg')` }}
      >
        <div className="header-overlay">
          <div className="header-content">
            <h1>Full Cycle Production</h1>
            <p>Your Next Film Destination</p>
          </div>
        </div>
      </header>
      <div className="content-container">
        <div className="intro">
          <p>
            With a team of experienced filmmakers, creatives, and technical
            experts, Filmworks Azerbaijan can help you produce high-quality
            films, commercials, music videos, and branded content.
          </p>
        </div>

        <div className="service-section">
          <h2>Pre-production service</h2>
          <ul className="stacked-list">
            <li>
              <strong>Script Development:</strong> We work with you to develop
              and refine your script, ensuring it aligns with your vision and
              goals.
            </li>
            <li>
              <strong>Concept & Storyboarding:</strong> From brainstorming to
              detailed storyboards, we map out every shot and sequence to
              visualize the project before filming begins.
            </li>
            <li>
              <strong>Casting:</strong> We assist with casting talent, from lead
              actors to extras, ensuring you get the perfect fit for your
              project.
            </li>
            <li>
              <strong>Provision of Equipment for Filming:</strong> We source any
              necessary equipment to ensure the shooting process goes exactly as
              planned.
            </li>
            <li>
              <strong>Search for film crew:</strong> We gather a film crew
              consisting of all necessary professionals for your project.
            </li>
            <li>
              <strong>Budgeting & Scheduling:</strong> Our team creates detailed
              production budgets and schedules to ensure your project stays on
              track and within budget.
            </li>
            <li>
              <strong>Set Design & Production Planning:</strong> From set
              construction to wardrobe and props, we ensure every detail is
              planned for seamless execution.
            </li>
          </ul>
        </div>

        <div>
          <h2>Production service</h2>
          <ul className="stacked-list">
            <li>
              <strong>Filming:</strong> Our experienced crew brings your script
              to life using state-of-the-art equipment. We handle all aspects of
              filming, from lighting and cinematography to direction and sound.
            </li>
            <li>
              <strong>Cinematography:</strong> We offer creative and technical
              expertise in camera work, lighting, and shot composition to
              capture stunning visuals.
            </li>
            <li>
              <strong>On-Set Coordination:</strong> Our team manages day-to-day
              operations, ensuring everything runs smoothly, from scheduling to
              coordinating with talent and crew.
            </li>
          </ul>
        </div>

        <div className="service-section">
          <h2>Post-Production Services</h2>
          <ul className="stacked-list">
            <li>
              <strong>Editing:</strong> Our talented editors craft your story by
              cutting and assembling the footage into a cohesive narrative that
              aligns with your vision.
            </li>
          </ul>
        </div>
        <div className="service-boxes-container">
          {/* Service 2 */}
          <div className="service-box">
            <img
              src="/images/Ateshgah.jpg"
              alt="Location Scouting"
              className="service-image"
            />
            <div className="service-content">
              <h3>Location Scouting</h3>
              <p>Discover stunning locations for your next project.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-box">
            <img src="/images/scouting.jpg" alt="" className="service-image" />
            <div className="service-content">
              <h3>Logistics Support</h3>
              <p>We help you with expert planning and execution.</p>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Blog;
