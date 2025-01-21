import React from 'react';
import ProfilePic from "./assets/profilepic.jpg";
import CV from "./assets/cv/LIMCV.pdf";
import './App.css';

const App = () => (
  <section id="about-me" className="about-me">
    <img src={ProfilePic} alt="Me" className="profile-pic" />
    <h2>John Fredrick N. Lim</h2>
    <div className="personal-info">
      <p><strong>Year:</strong> 4th Year</p> 
      <p><strong>Section:</strong> BSIT</p> 
    </div>
    <p>
      I’m a passionate artist exploring the intersections of photography,
      graphic design, and visual storytelling. My work highlights creativity
      and a keen eye for detail. I enjoy experimenting with different mediums and
      strive to tell compelling stories through my art.
    </p>
    <a href={CV} download="JohnDoe_CV.pdf" className="download-cv-button">
      Download CV
    </a>
  </section>
);

export default App;