import React, { Component } from "react";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";
import Emerald from "../../images/emerald.png";
import "./Main.css";
import "./Stars.css";
import $ from "jquery";
import Footer from "../../components/Footer/Footer";

class Main extends Component {
	componentDidMount() {
		$("#frontpage").attr("style", "height:" + window.innerHeight + "px");
		window.onresize = function (event) {
			$("#frontpage").attr("style", "height:" + window.innerHeight + "px");
			console.log(window.innerHeight);
		};

		this.scrollFunc();
	}

	scrollFunc() {
		$("#button").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#nav-bar").offset().top,
				},
				1000
			);
		});
	}

	render() {
		return (
			<>
				<section
					id="frontpage"
					className="top-container flex"
					style={{ height: 20 }}
				>
					<div id="stars"></div>
					<div id="stars2"></div>
					<div id="title">
						<div className="row" id="stop-overflow">
							<div className="col-sm-1 col-md-1 col-lg-2"></div>
							<div className="col-sm-10 col-md-10 col-lg-8">
								<span id="intro">Hi! </span>
								<span id="intro">
									{" "}
									I'm Emerald
									<img
										id="emerald-img"
										id="emerald"
										src={Emerald}
										alt="emerald"
										height="80px"
									/>
								</span>

								<span id="intro"> </span>
								<p id="introtext">
									I am a Full Stack Web Developer located in the Atlanta Area.
									My passions are programming and learning! I enjoy building
									elegant and functional applications.
								</p>

								<button
									type="button"
									id="button"
									className="btn btn-outline-success"
								>
									View more <i className="fas fa-arrow-down"></i>
								</button>

								<div className="col-sm-1 col-md-1 col-lg-2"></div>
							</div>
						</div>
					</div>
				</section>
				<NavBar />
				<About />
				<Portfolio />
				<Contact />
                <Footer />
			</>
		);
	}
}
export default Main;
