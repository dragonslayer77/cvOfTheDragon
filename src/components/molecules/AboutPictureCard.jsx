import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const images = [
  {
    name: "Bow and Arrow",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575374353/716AD629-F573-484A-A0A8-4C1E894C6D7F_m4q8ad.jpg",
    id: 1
  },
  {
    name: "Wild Code School",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575374449/IMG_7739_c55atq.jpg",
    id: 3
  },
  {
    name: "Piggy",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575374447/B26BB72A-7612-4E69-BF19-B2BE7D57E728_xt4jw5.jpg",
    id: 2
  },
  {
    name: "Turkey",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575374642/linkedinpic_fyzn9s.png",
    id: 5
  },
  {
    name: "Tomatoes",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575374454/5169D5D7-92FB-47DE-8F90-CFD612F80ADF_lx7ew7.jpg",
    id: 4
  },
  {
    name: "Jack",
    imgUrl:
      "https://res.cloudinary.com/dciypbwrh/image/upload/v1575374760/bc36ebb9-4ed0-4f38-9132-4e712f3a4313_l7adlh.jpg",
    id: 6
  }
];

const AboutPictureCard = () => {
  return (
    <ScrollAnimation className="about-image" animateIn="fadeInLeft">
        {images.map(image => (
          <div key={image.id} className="about-image-card">
            <img src={image.imgUrl} alt={image.name} />
          </div>
        ))}
    </ScrollAnimation>
  );
};

export default AboutPictureCard;
