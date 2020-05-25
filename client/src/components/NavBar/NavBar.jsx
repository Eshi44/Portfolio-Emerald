import React, { Component } from "react";
import "./NavBar.css";
import $ from "jquery";

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
								<button id="about">About</button>
							</li>
							<li>
								<button id="portfolio">Portfolio</button>
							</li>
							<li>
								<button id="contact">Contact</button>
							</li>
							<li>
								<button
									type="button"
									className="btn btn-outline-primary"
									id="btn-resume"
								>
									Resume
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default NavBar;
