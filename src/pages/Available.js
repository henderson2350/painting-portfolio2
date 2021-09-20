import React from "react"; 
import Navbar from "../components/Navbar"
import Photocard from "../components/Photocard/Photocard"


function Available() {
    return (
        <div>
            <Navbar />
            <p>Available works</p>
            <Photocard />
        </div>
    )
}

export default Available;