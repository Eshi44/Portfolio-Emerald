import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import EatBurgerMain from "../../images/eat-da-burger-screenshot.png"
import "./Pages.css";

class EatDaBurger extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={EatBurgerMain} />
						</div>
						<div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								Eat-Da-Burger
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
								AJAX
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								APIs
							</button>
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
								Handlebars
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
								MySQL
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Node.js
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								ORM
							</button>

							<p id="info-on-project">
								{" "}
								This is a A Node, Express, MySQL, Handlebars, ORM application
								that allows users to create and devour their own personalized
								burgers. <p></p>
								Eat-da-Burger is a restaurant app that lets users view, order,
								and consume their personalized burgers using Node, Express,
								MySQL, Handlebars, and ORM. Node and MySQL are used to query and
								route data in the app, and Handlebars are used to generate the
								HTML.
							</p>
							<a
								href="https://eat-da-burger-log-da-burger.herokuapp.com/"
								target="blank"
							>
								<button id="button-links" type="button" class="btn btn-primary">
									Website
								</button>{" "}
							</a>
							<a href="https://github.com/Eshi44/Eat-Da-Burger" target="blank">
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

export default EatDaBurger;
