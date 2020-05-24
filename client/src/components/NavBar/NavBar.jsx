import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
   
 

    render() {
        return (
            <>
                <nav className="navbar" id="nav-bar">
                <div id="float-div">
            <ul>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </div>
                </nav>
            </>
        );
    }
}

export default NavBar;