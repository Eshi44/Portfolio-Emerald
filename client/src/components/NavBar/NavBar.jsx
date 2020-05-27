import React, { Component } from "react";
import Emerald from "../../images/emerald.png";
import PDF from "../../documents/Emerald-Sea-Hamel-Iervolino-Resume.pdf";
import "./NavBar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

class NavBar extends Component {
	componentDidMount() {
		//call scroll functions
		this.scrollFuncPortfolio();
		this.scrollFuncAbout();
		this.scrollFuncContact();
	}
	// scroll function for portfolio btn
	scrollFuncPortfolio() {
		$("#portfolio").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#portfolio-container").offset().top,
				},
				1000
			);
		});
	}
	// scroll function for about btn
	scrollFuncAbout() {
		$("#about").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#about-me-container").offset().top,
				},
				1000
			);
		});
	}
	// scroll function for contact bt
	scrollFuncContact() {
		$("#contact").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#contact-container").offset().top,
				},
				1000
			);
		});
	}

	render() {
		return (
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
								<button id="about">About</button>
							</li>
							<li>
								<button id="portfolio">Portfolio</button>
							</li>
							<li>
								<button id="contact">Contact</button>
							</li>
							<li>
								<a href={PDF} target="_blank" id="btn-resume">
									Resume
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default NavBar;
