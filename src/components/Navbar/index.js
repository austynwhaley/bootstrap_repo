import React from "react";
import "./style.css";

function Navbar() {

    return (
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;