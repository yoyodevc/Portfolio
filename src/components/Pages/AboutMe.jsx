import React from 'react';
import ProfilePic from "../../assets/profilepic.jpg";
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <img src={ProfilePic} alt="Me" className="profile-pic" />
      <h2>John Fredrick N. Lim</h2>
      <div className="personal-info">
        <p><strong>Academic Level:</strong> 4th Year</p>
        <p><strong>Program:</strong> Bachelor of Science in Information Technology</p>
      </div>
      <p>
        I'm a student programmer with a focus on back-end development. I work on 
        building efficient server-side systems, managing databases, and solving
        coding challenges. I enjoy learning new technologies and improving my 
        skills in creating practical solutions for real-world problems
      </p>
    </section>
  );
};

export default AboutMe;
