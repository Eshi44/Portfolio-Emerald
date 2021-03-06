import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBarPages";
import ThirdWaveMain from "../../images/third-wave.jpg";
import "./Pages.css";


class ThirdWaveCoffee extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={ThirdWaveMain} />
						</div>
                        <div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								Third Wave Coffee
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
								Animate.css
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Bootstrap
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Express
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								MongoDB
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Mongoose ODM
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
								jQuery
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								REACT
							</button>

							<p id="info-on-project">
								{" "}
								This is a full stack MERN application with Full CRUD
								Functionality that follows the MVC paradigm and authenticates
								users. <p></p>
								Users passwords are hashed as well as encrypted in a JSON Web
								Token. Environmental variables are also hidden. Users can
								securly login and keep track of their coffee creations.
							</p>
							<a href="https://third-wave-coffee-app.herokuapp.com/" target="blank"><button id="button-links" type="button" class="btn btn-primary">Website</button> </a>
                            <a href="https://github.com/Eshi44/Third-Wave-Coffee" target="blank"><button id="button-links" type="button" class="btn btn-primary">Github</button></a>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ThirdWaveCoffee;
