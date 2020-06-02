import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBarPages";
import CatSweeperMain from "../../images/catsweeper-screenshot.png";
import "./Pages.css";

class CatSweeper extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={CatSweeperMain} />
						</div>
						<div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								CatSweeper
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
								Express
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Heroku
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								HTML & CSS
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								JavaScript
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Node.js
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								React
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Sass
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								TypeScript
							</button>

							<p id="info-on-project">
								{" "}
								CatSweeper is a twist on the classic game minesweeper. It is a
								Node, Express, React, Typescript, Sass App. <p></p>
								This single-player puzzle game allows users to play on easy mode
								and clear the board without uncovering the 10 yarns. Users can
								also place 10 fishing poles on the board to mark where a yarn
								may be hiding.
							</p>
							<a href="https://cat-sweeper.herokuapp.com/" target="blank">
								<button id="button-links" type="button" class="btn btn-primary">
									Website
								</button>{" "}
							</a>
							<a href="https://github.com/Eshi44/CatSweeper" target="blank">
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

export default CatSweeper;
