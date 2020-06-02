import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBarPages";
import GeneratorMain from "../../images/team-profile-generator-screenshot.png";
import "./Pages.css";

class TeamGenerator extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={GeneratorMain} />
						</div>
						<div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								Team Profile Generator
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
								Animate.css
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Bootstrap
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
								Inquirer npm
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Jest npm
							</button>

							<p id="info-on-project">
								{" "}
								A CLI application using Inquirer and TDD with Jest. <p></p>
								The application is designed to build a software engineering team
								generated through a node.js command line application. The
								application will prompt the user for information about the team
								and their information such as name, id, position, github, and
								email. The user can input any number of team members, and they
								may be a mix of engineers, managers and interns.
							</p>
							<a
								href="https://github.com/Eshi44/Team-Profile-Generator"
								target="blank"
							>
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

export default TeamGenerator;
