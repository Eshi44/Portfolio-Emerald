import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
   
 

    render() {
        return (
            <>
                <nav className="navbar" id="nav-bar">
                <img
										id="emerald-img"
										id="emeraldLogo"
										src="assets/img/emerald.png"
										alt="emerald"
										height="60px"
									/>
                <div id="float-div">
            <ul>
                <li>
                    <a href="#about-me-container">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact-container">Contact</a>
                </li>
                <li>
                    <button type="button" className="btn btn-outline-primary" id="btn-resume">Resume</button>
                </li>
            </ul>
        </div>
                </nav>
            </>
        );
    }
}

export default NavBar;