import React from "react";
import Button from '../atoms/Button';


const projects = [
  {
    name: "Lisbon Blog",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575458722/lisbonblog_dakwoh.png",
    technology: "HTML/CSS",
    link: "https://dragonslayer77.github.io/project-lisbon/",
    github: "https://github.com/dragonslayer77/project-lisbon",
    text: "Github",
    key: 1
  },
  {
    name: "Chase the Space",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575458499/chasethespace_ihsfd5.png",
    technology: "React",
    link: "https://sofiarocha.github.io/Chase-the-Space/",
    github: "https://github.com/sofiarocha/Chase-the-Space",
    text: "Github",
    key: 2
  },
  {
    name: "Math is Cool",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575458504/mathiscool_gniujs.png",
    technology: "React - Hackathon",
    link: "https://dragonslayer77.github.io/MathIsCool",
    github: "https://github.com/dragonslayer77/MathIsCool",
    text: "Github",
    key: 3
  },
  {
    name: "Owl Conf",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575458921/owlconf_zaeujz.png",
    technology: "React - Hackathon",
    link: "https://anelisynagano.github.io/mercedeshackathon/",
    github: null,
    text: "Private",
    key: 4
  },
  {
    name: "Base Ipam",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575459080/baseipam_izs0ow.png",
    technology: "React/Node.js",
    link: "https://www.baseipamlisboa.com/",
    github: null,
    text: "Private",
    key: 5
  }
];

const ProjectCards = () => {
  return (
    <div div className="project">
      {projects.map(project => (
        <div className="project-card" key={project.name}>
          <img src={project.imgUrl} alt={project.name} />
          <div className="project-card-hover">
            <div className="project-card-hover-text">
              <p>{project.technology}</p>
              <h4>{project.name}</h4>
              <Button className='button' text="View" link={project.link} />
              <Button className='button' text={project.text} link={project.github} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
