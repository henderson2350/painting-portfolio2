import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Photocard from "../components/Photocard"
import GalleryContainer from "../components/GalleryContainer";
import carolineLane from "../photos/carolineLane.jpg"
import cartoon from "../photos/cartoon.jpg"
import glitterGrain from "../photos/glitterGrain.jpg"
import hopeGray from "../photos/hopeGray.JPG"
import jewel from "../photos/jewel.jpg"
import joHerget from "../photos/joHerget.jpg"
import priceCiolino from "../photos/priceCiolino.jpg"

function Gallery() {
  return (
    <div>
      <Navbar />
      <GalleryContainer />
    </div>
    
  );
}

export default Gallery;
