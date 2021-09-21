import React from "react";
import photo from "../../photos/about-photo.jpg";
import "./style.css";

function AboutMeContent() {
  return (
    <div>
      <div>
        <p id="about-me-txt">
          Clare Henderson is a recent graduate from the University of Virginia
          living and working in New York City. She is represented by the Poppy
          Society in New Orleans, and Juliette Eberle in NYC. 
        </p>
      </div>
      <div>
        <img id="photo-me" src={photo} />
      </div>
    </div>
  );
}

export default AboutMeContent;
