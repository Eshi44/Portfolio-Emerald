import React, { Component } from 'react';
import Emerald from "../../images/emerald.png";
import PDF from "../../documents/Emerald-Sea-Hamel-Iervolino-Resume.pdf";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBarPages extends Component {
    render() {
        return (
            <div>
                <>
				<nav className="navbar" id="nav-bar">
				<Link to="/"><img
						id="emerald-img"
						id="emeraldLogo"
						src={Emerald}
						alt="emerald"
						height="60px"
					/></Link>
					<div id="float-div">
						<ul>
							<li>
								<a href={PDF} target="_blank" id="btn-resume">
									Resume
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
            </div>
        );
    }
}

export default NavBarPages;