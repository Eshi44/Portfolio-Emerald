import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBarPages";
import EmployeeDirMain from "../../images/employee-directory-screenshot.png"
import "./Pages.css";

class EmployeeDirectory extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={EmployeeDirMain} />
						</div>
						<div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								Employee Directory 
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
								Bootstrap
							</button>
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
								jQuery
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Node.js
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Random User API
							</button>
                            <button id="button-skills" type="button" class="btn btn-primary">
								REACT
							</button>
							<p id="info-on-project">
								{" "}
								A Node, Express, REACT App using Random User API where users can
								find employees by either first name, last name, or location.{" "}
								<p></p>
								Users can filter employees within this employee directory by
								either first name, last name, or location. Simply search an
								employee using the input box and the table will begin to filter.
							</p>
							<a
								href="https://employee-directory-finder.herokuapp.com/"
								target="blank"
							>
								<button id="button-links" type="button" class="btn btn-primary">
									Website
								</button>{" "}
							</a>
							<a
								href="https://github.com/Eshi44/Employee-Directory"
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

export default EmployeeDirectory;
