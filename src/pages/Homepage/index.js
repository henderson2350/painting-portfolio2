import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div >
            <p>
                <Link id="linkid" to="/gallery">CLARE HENDERSON</Link>
            </p>
        </div>

    )
}

export default Homepage;