import React from "react";
import AboutPictureCard from "../molecules/AboutPictureCard";

const About = () => {
  return (
    <div id="About" className="about">
      <h1>'Bout me</h1>
      <div className="about-sections">
        <div className="about-sections-box">
          <h3>Personal</h3>
          <p>
            Officiis et ab ea illum molestiae enim laborum odio. Ratione
            corporis libero distinctio incidunt. Ipsa sit est quo esse.
          </p>
        </div>
        <div className="about-sections-box">
          <h3>Code</h3>
          <p>
            Officiis et ab ea illum molestiae enim laborum odio. Ratione
            corporis libero distinctio incidunt. Ipsa sit est quo esse.
          </p>
        </div>
        <div className="about-sections-box">
          <h3>Goals</h3>
          <p>
            Officiis et ab ea illum molestiae enim laborum odio. Ratione
            corporis libero distinctio incidunt. Ipsa sit est quo esse.
          </p>
        </div>
      </div>
      <AboutPictureCard />
    </div>
  );
};

export default About;
