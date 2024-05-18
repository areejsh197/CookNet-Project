import React from 'react';
import screens from '../data/ScreensJson.js';
import "../Styles/AboutStyles.css";
import Header from '../components/Layout/Myheader.js';
import Footer from '../components/Layout/Footer.js';

const About = () => {
  const { aboutpage } = screens; // Destructure the aboutpage object from the JSON data

  return (
    <>
    <Header/>
    <div className="about-container1">
      <a className="about-background1" src={aboutpage.image} alt={aboutpage.title} />
      <div className="about-content1">
        <h1>{aboutpage.title}</h1>
        <p>{aboutpage.description}</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
