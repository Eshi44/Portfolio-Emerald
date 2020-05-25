import React, { Component } from "react";
import TotalProjects from '../../components/Total';
import "./Portfolio.css";

class Portfolio extends Component {
	render() {
		return (
			<>
			<div id="portfolio">
				<div className="container-fluid" id="portfolio-container">
					<h1 id="center-header-section-text">Portfolio</h1>

					<TotalProjects />
					</div>
				
				<hr></hr>
				</div>
			</>
		);
	}
}
export default Portfolio;
