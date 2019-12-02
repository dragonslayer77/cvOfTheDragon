import React from "react";
import TechImage from "../TechImage";

const technologies = [
  {
    name: "React",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1",
    id: 1
  },
  {
    name: "React",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1",
    id: 2
  },
  {
    name: "React",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1",
    id: 3
  },
  {
    name: "React",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1",
    id: 4
  },
  {
    name: "React",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1",
    id: 5
  }
];

const Tech = () => {
  return (
    <div id="Tech" className="tech">
      <h1>Tech</h1>
      <div className="techImages">
        {technologies.map(technology => (
          <TechImage
            name={technology.name}
            imgUrl={technology.url}
            key={technology.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;
