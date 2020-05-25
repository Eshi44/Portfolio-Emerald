import React, { Component } from "react";
import JavascriptIcon from "../../images/javascript.png";
import "./SkillsCarousel.css";
import NodeJS from "../../images/nodejs.png";
import MySQL from "../../images/MySQL.png";
import REACT from "../../images/reactjs.png";
import jQuery from "../../images/jquery.png";
import Heroku from "../../images/heroku.png";
import Express from "../../images/expressjs.png";
import Handlebars from "../../images/handlebars.png";

class SkillsCarousel extends Component {
	render() {
		return (
			<>
				<div
					id="carouselExampleControls"
					className="carousel slide "
					data-ride="carousel"
					data-interval="false"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="row">
								<div className="col-3">
									<img
										className="d-block w-100" src={JavascriptIcon} alt="Javascript"/>
								</div>
								<div className="col-3">
									<img className="d-block w-100" src={NodeJS} alt="Nodejs" />
								</div>
								<div className="col-3">
									{" "}
									<img className="d-block w-100" src={REACT} alt="Reactjs" />
								</div>
								<div className="col-3">
									<img className="d-block w-100" src={MySQL} alt="MySQL" />
								</div>
							</div>
						</div>
                        <div className="carousel-item">
							<div className="row">
								<div className="col-3">
                                <img className="d-block w-100" src={Heroku} alt="Heroku" />
									
								</div>
								<div className="col-3">
									<img id="handlebars" className="d-block w-100" src={Handlebars} alt="Handlebars" />
								</div>
								<div className="col-3">
									{" "}
									<img className="d-block w-100" src={jQuery} alt="jQuery" />
								</div>
								<div className="col-3">
                                <img
										className="d-block w-100" src={Express} alt="Expressjs"/>
								</div>
							</div>
						</div>
                        
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</>
		);
	}
}

export default SkillsCarousel;
