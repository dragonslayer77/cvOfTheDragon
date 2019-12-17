import React from "react";
import Slider from "react-slick";
import TechImage from "../molecules/TechImage";
import ProjectCards from "../molecules/ProjectCards";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4
};

const technologies = [
  {
    name: "HTML",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575451808/htmlcss_vdirir.png",
    id: 1
  },
  {
    name: "CSS",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390019/css.9fe7584b_jzmgpm.png",
    id: 2
  },
  {
    name: "Javascript",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390024/javascript.0cded3a3_h2ichz.png",
    id: 3
  },
  {
    name: "Node.JS",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390032/undefined_modwb6.png",
    id: 4
  },
  {
    name: "Express",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390041/express.88487091_otu9oj.png",
    id: 5
  },
  {
    name: "MongoDB",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390048/mongodb.22a4b423_qenv7e.png",
    id: 6
  },
  {
    name: "Mongoose",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390057/mongoose.9231b32e_xunqzt.png",
    id: 7
  },
  {
    name: "React",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390068/react.82a318cc_gc8wwi.png",
    id: 8
  },
  {
    name: "GraphQL",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390078/graphql.36929981_icafqf.png",
    id: 9
  },
  {
    name: "Git",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390092/undefined_tbs9wd.png",
    id: 10
  },
  {
    name: "GitHub",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390105/github.b71bc541_rg6rph.png",
    id: 11
  },
  {
    name: "Sass",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390315/sass.74c36290_sxu9y9.png",
    id: 12
  },
  {
    name: "Yarn",
    url:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575390126/1488416188-yarn-logo_hdmxxr.png",
    id: 13
  }
];

const Development = () => {
  return (
    <div id="Development" className="development">
      <div className="development-portfolio">
        <h2>Portfolio</h2>
        <ProjectCards />
      </div>
      <div className="development-skills">
        <h2>Skills</h2>
        <Slider {...settings}>
          {technologies.map(technology => (
            <TechImage
              name={technology.name}
              imgUrl={technology.url}
              key={technology.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Development;
