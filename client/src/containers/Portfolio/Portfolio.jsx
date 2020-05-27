import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import ThirdWaveCoffee from "../../images/third-wave-coffee.png";
import PokeBattle from "../../images/pokebattle.png";
import EatDaBurger from "../../images/eat-da-burger.png";
import ConcertHunt from "../../images/concerthunt.png";
import EmployeeDir from "../../images/employee-directory.png";
import TeamProfileGen from "../../images/team-profile-generator.png";
import { Link } from "react-router-dom";
import "./Portfolio.css";

class Portfolio extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<>
				<div className="container-fluid" id="portfolio-container">
					<h1 id="portfolio-text">Portfolio</h1>
					<Carousel slidesPerScroll={1} slidesPerPage={3} infinite arrows  centered
					 breakpoints={{
						640: {
						  slidesPerPage: 1,
						  arrows: true
						},
						900: {
						  slidesPerPage: 3,
						  arrows: true
						}
					  }}>
					<Link to="/pokebattle"><img id="carousel-img" src={PokeBattle} /></Link>
					<Link to="/concert-hunt"><img id="carousel-img" src={ConcertHunt} /> </Link>
					<a href="" target="_blank"><img id="carousel-img" src={EatDaBurger} /> </a>
					<a href="" target="_blank"><img id="carousel-img" src={EmployeeDir} /> </a>
					<a href="" target="_blank"><img id="carousel-img" src={TeamProfileGen} /> </a>
					<Link to="/third-wave-coffee"><img id="carousel-img" src={ThirdWaveCoffee} /></Link>
					</Carousel>
				</div>

				<hr></hr>
			</>
		);
	}
}
export default Portfolio;
