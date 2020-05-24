import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<>
				<div className="container-fluid" id="about-me-container">
					<h1 id="center-header-section-text">About</h1>
					<div className="row">
						<div className="col-xs-2 col-sm-5  col-md-3 col-lg-4 ">
							<img
								src="assets/img/Profile-Photo.jpg"
								alt="Profile picture"
								id="about-image"
							/>
						</div>
						<div className="col-xs-7 col-sm-5  col-md-7 col-lg-5">
							<p id="aboutMe-text">
								{" "}
								Hi! I'm Emerald, a Full-Stack Developer based in the Atlanta
								Area. I am proficient in a variety of programming languages,
								which I use to create agile, intuitive user designs. I excel at
								communication, analysis, and organization, and am always eager
								to learn new skills.{" "}
							</p>

							<p id="aboutMe-text">
								{" "}
								Shortly before graduating with a B.S. in Psychology, I enrolled
								in Georgia Tech’s intensive 12-week bootcamp, with a focus on
								JavaScript, and responsive web design.
							</p>

							<a
								href="https://www.scrumalliance.org/community/profile/ehamelierv"
								target="_blank"
							>
								<img
									src="assets/img/csm.png"
									className="img-responsive"
									data-toggle="tooltip"
									id="scrumMaster"
									title
									data-original-title="Certified ScrumMaster®"
								></img>
							</a>
							<a href="https://github.com/Eshi44" target="_blank">
								<i className="fab fa-github-square fa-3x"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/emerald-hamel-iervolino-a878a5a4/"
								target="_blank"
							>
								<i className="fab fa-linkedin fa-3x"></i>
							</a>

							<a href="mailto:e.hameliervolino@gmail.com?Subject=">
								<i className="fas fa-envelope fa-3x"></i>
							</a>

							<a
								href="https://github.com/Eshi44/Portfolio/blob/EmDevelop/Emerald%20Hamel-Iervolino%20Resume.pdf"
								target="_blank"
								id="resume"
							>
								{" "}
								RESUME
							</a>
						</div>
						<div className="col-xs-3 col-sm-2 col-md-2 col-lg-3"></div>
					</div>
				</div>
				<hr></hr>
			</>
		);
	}
}
export default About;
