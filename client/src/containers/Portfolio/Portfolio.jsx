import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import ThirdWaveCoffee from "../../images/third-wave-coffee.png";
import PokeBattle from "../../images/pokebattle.png";
import EatDaBurger from "../../images/eat-da-burger.png";
import ConcertHunt from "../../images/concerthunt.png";
import EmployeeDir from "../../images/employee-directory.png";
import TeamProfileGen from "../../images/team-profile-generator.png";
import "./Portfolio.css";

class Portfolio extends Component {
	componentDidMount() {}

	render() {
		return (
			<>
				<div className="container-fluid" id="portfolio-container">
					<h1 id="center-header-section-text">Portfolio</h1>
					<Carousel slidesPerScroll={1} slidesPerPage={3} infinite arrows  centered>
					<a href="" target="_blank"><img id="third-wave-coffee-img" src={PokeBattle} /> </a>
					<a href="" target="_blank"><img id="third-wave-coffee-img" src={ConcertHunt} /> </a>
					<a href="" target="_blank"><img id="third-wave-coffee-img" src={EatDaBurger} /> </a>
					<a href="" target="_blank"><img id="third-wave-coffee-img" src={EmployeeDir} /> </a>
					<a href="" target="_blank"><img id="third-wave-coffee-img" src={TeamProfileGen} /> </a>
					<a href="" target="_blank"><img id="third-wave-coffee-img" src={ThirdWaveCoffee} /> </a>
					</Carousel>
				</div>

				<hr></hr>
			</>
		);
	}
}
export default Portfolio;
