import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

function HomepageContent() {
  return (
    <div>
      <p>
        <Link id="linkid" to="/gallery">
          CLARE HENDERSON
        </Link>
      </p>
    </div>
  )
}

export default HomepageContent;
