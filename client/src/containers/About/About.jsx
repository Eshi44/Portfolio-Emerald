import React, { Component } from "react";
import "./About.css";
import SkillsCarousel from "../../components/Carousel/SkillsCarousel";
import ProfileImg from "../../images/profile-pic.jpg";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import CSM from "../../images/csm.png";
import Email from "../../images/email.png";

class About extends Component {
	render() {
		return (
			<>
				<div className="container-fluid" id="about-me-container">
					<h1
						id="center-header-section-text"
						className="animate__animated animate__bounceInLeft"
					>
						About
					</h1>
					<div className="row" id="aboutme-overflow">
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
						<div className="col-xs-1 col-sm-4 col-md-2 col-lg-3 ">
							<img src={ProfileImg} alt="Profile picture" id="about-image" />
						</div>
						<div className="col-xs-7 col-sm-5 col-md-7 col-lg-5">
							<p id="aboutMe-text">
								{" "}
								Hi! I'm Emerald, a Full-Stack Developer based in the Atlanta
								Area. I am proficient in a variety of programming languages,
								which I use to create intuitive user designs. I excel at
								communication, analysis, and organization, and I am always eager
								to learn new skills.{" "}
							</p>

							<p id="aboutMe-text">
								{" "}
								Shortly before graduating with a B.S. in Psychology, I enrolled
								in Georgia Tech’s intensive 12-week bootcamp, with a focus on
								JavaScript, MERN Stack, and responsive web design.
							</p>
						</div>
						<div className="col-xs-3 col-sm-2 col-md-2 col-lg-3"></div>
					</div>

					<div className="row" id="icons-imgs">
						
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
							<ul>
								<li>
									{" "}
									<a href="https://github.com/Eshi44" target="_blank">
										<img src={Github} alt="Github Profile" />
									</a>
								</li>
								<li>
									{" "}
									<a href="https://www.linkedin.com/in/emerald-hamel-iervolino-a878a5a4/" target="_blank">
										<img src={Linkedin} alt="LinkedIn Profile" />
									</a>{" "}
								</li>
								<li> <a href="mailto:e.hameliervolino@gmail.com?Subject=">
										<img src={Email} alt="Email" />
									</a></li>
									<li>
									{" "}
									<a href="https://www.scrumalliance.org/community/profile/ehamelierv" target="_blank">
										<img src={CSM} alt="Scrum Alliance" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
				<div className="container-fluid" id="skills-block">
					<div className="row">
						<div className="col-12">
							<h1 id="skills-text">Skills</h1>
						</div>
					</div>
					<div className="row d-flex justify-content-center">
						<SkillsCarousel />
					</div>
				</div>

				<hr></hr>
			</>
		);
	}
}
export default About;
