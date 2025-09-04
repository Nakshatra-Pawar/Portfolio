import React from 'react';
import './Resume.css'; // Optional: create this file for custom styling

const Resume = () => {
  return (
    <section id="resume" className="app__resume">
      <h1>Resume</h1>
      <h2>Know more about my journey</h2>
      <div className="app__resume-box">
        <a 
          href="./print_draft.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="app__resume-link"
        >
          Click to view my resume
        </a>
      </div>
    </section>
  );
};

export default Resume;