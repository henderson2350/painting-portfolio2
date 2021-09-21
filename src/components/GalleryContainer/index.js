import React, { useState } from "react";
import './style.css';
import Photocard from "../Photocard";
import carolineLane from "../../photos/carolineLane.jpg";
import cartoon from "../../photos/cartoon.jpg";
import glitterGrain from "../../photos/glitterGrain.jpg";
import hopeGray from "../../photos/hopeGray.JPG";
import jewel from "../../photos/jewel.jpg";
import joHerget from "../../photos/joHerget.jpg";
import priceCiolino from "../../photos/priceCiolino.jpg";

function GalleryContainer() {
  const [data, setData] = useState([
    {
      title: "Commission",
      price: "SOLD",
      photo: carolineLane,
      description: "Oil, acrylic, and resin on panel, 24x24",
    },
    {
      title: "Cartoon",
      price: "$900",
      photo: cartoon,
      description: "Gouache, acrylic, and resin on panel, 24x36",
    },
    {
      title: "Glitter grain",
      price: "$1000",
      photo: glitterGrain,
      description: "Gouache, acrylic, and glitter on panel, 20x20",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: hopeGray,
      description: "Oil, acrylic, and resin on panel, 30x30",
    },
    {
      title: "Jewel",
      price: "SOLD",
      photo: jewel,
      description: "Oil, acrylic, and resin on panel, 30x30",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: joHerget,
      description: "Acrylic and resin on panel, 20x20",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: priceCiolino,
      description: "Acrylic and resin on panel, 2 10x20",
    },
  ]);

  return (
    <div id="gallery-container" className="row">
      {data.map((unitData) => (
        <Photocard data={unitData} />
      ))}
    </div>
  );
}

export default GalleryContainer;
