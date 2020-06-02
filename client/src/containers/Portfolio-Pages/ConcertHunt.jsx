import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBarPages";
import ConcertMain from "../../images/concerthunt-screenshot.png";
import "./Pages.css";
class ConcertHunt extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={ConcertMain} />
						</div>
						<div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								Concert Hunt
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
                            BandsInTown API
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
                            Foundation
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
                            HTML & CSS
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								JavaScript
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								jQuery
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Last.fm API
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Moment.js
							</button>

							<p id="info-on-project">
								{" "}
								ConcertHunt provides an all-in-one platform that allows users to
								search the names of their favorite artists, discover any
								upcoming concerts, and easily purchase concert tickets. <p></p>
								The starting page shows the current top artists retrieved from
								Last.fm API, as well as images from BandsInTown API. The search
								bar lets you search for artist by name and retrieves their bio,
								genre, most popular, albums, social media links, and upcoming
								concerts.
							</p>
							<a href="https://eshi44.github.io/Concert-Hunt/" target="blank">
								<button id="button-links" type="button" class="btn btn-primary">
									Website
								</button>{" "}
							</a>
							<a href="https://github.com/Eshi44/Concert-Hunt" target="blank">
								<button id="button-links" type="button" class="btn btn-primary">
									Github
								</button>
							</a>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ConcertHunt;
