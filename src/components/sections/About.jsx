import React from "react";
import AboutPictureCard from "../molecules/AboutPictureCard";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
  return (
    <div id="About" className="about">
      {/* <AnchorLink className="goHomeLogo" offset={() => 1} href={"#Home"}>
        <img
          className="navbar-logo-image"
          src="https://res.cloudinary.com/dciypbwrh/image/upload/v1575370222/JwhhSAne0t_htnepc.svg"
          alt="dragonLogo"
        />
      </AnchorLink> */}
      <h1>Who is dragonslayer77?</h1>
      <div className="about-sections">
        <div className="about-sections-box">
          <h3>Personal</h3>
          <p>
            I am a 21 year old Web Developer. I love to cook, im trying to learn
            how to surf and I practice krav maga. I studied Organic Agriculture
            in university, basically so i could pet the farm animals.
          </p>
        </div>
        <div className="about-sections-box">
          <h3>Code</h3>
          <p>
            I started coding in early 2019 at <span>Wild Code School</span>, since then I’ve
            worked on various projects including blogs, games and simple landing
            pages. My focus at the moment is Javascript, mainly React, but I’m
            always learning new things.
          </p>
        </div>
        <div className="about-sections-box">
          <h3>Goals</h3>
          <p>
            At the moment my main goals are to create simple, readable and
            effective code that yields an aesthetically pleasant product. As
            well to further explore the backend world, primarily using Node.js.
          </p>
        </div>
      </div>
      <AboutPictureCard />
    </div>
  );
};

export default About;
