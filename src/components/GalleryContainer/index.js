import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

import Photocard from "../Photocard";
import carolineLane from "../../photos/carolineLane.jpg";
import cartoon from "../../photos/cartoon.jpg";
import glitterGrain from "../../photos/glitterGrain.jpg";
import jewel from "../../photos/jewel.jpg";
import joHerget from "../../photos/joHerget.jpg";
import priceCiolino from "../../photos/priceCiolino.jpg";

function GalleryContainer() {
  const data1 = [
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
  ];

  const data2 = [
    {
      title: "Glitter grain",
      price: "$1000",
      photo: glitterGrain,
      description: "Gouache, acrylic, and glitter on panel, 20x20",
    },
    {
      title: "Jewel",
      price: "SOLD",
      photo: jewel,
      description: "Oil, acrylic, and resin on panel, 30x30",
    }
  ]

  const data3 = [
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
  ]

  return (
    <Container id="gallery-container">
      <Row>
        <Col>
        {data1.map((unitData) => (
          <Photocard data={unitData} />
        ))}
        </Col>
        <Col>
        {data2.map((unitData) => (
          <Photocard data={unitData} />
        ))}
        </Col>
        <Col>
        {data3.map((unitData) => (
          <Photocard data={unitData} />
        ))}
        </Col>
      </Row>
      
    </Container>
  );
}

export default GalleryContainer;
