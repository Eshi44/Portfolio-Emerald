import React, { Component } from "react";
import JavascriptIcon from "../../images/javascript.png";
import "./SkillsCarousel.css";
import NodeJS from "../../images/nodejs.png";
import Mongo from "../../images/mongodb.png";
import REACT from "../../images/reactjs.png";
import jQuery from "../../images/jquery.png";
import Heroku from "../../images/heroku.png";
import Express from "../../images/expressjs.png";
import Handlebars from "../../images/handlebars.png";
import Bootstrap from "../../images/bootstrap.png";
import Npm from "../../images/npm.png";
import Travis from "../../images/travis-ci.png";
import Webpack from "../../images/webpack.png";
import Git from "../../images/git.png";
import Jest from "../../images/jest.png";
import Rest from "../../images/restful.png";
import Html from "../../images/html.png";
import MySQL from "../../images/MySQL.png";
import PWA from "../../images/pwa.png";
import Saas from "../../images/sass.png";
import CSS from "../../images/css.png";

class SkillsCarousel extends Component {
	render() {
		return (
			<>
				<div
					id="carouselExampleControls"
					className="carousel slide "
					data-ride="carousel"
                    data-interval="2000"
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
									<img id="mongodb"className="d-block w-100" src={Mongo} alt="Mongodb" />
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
                        <div className="carousel-item">
							<div className="row">
								<div className="col-3">
                                <img id="webpack" className="d-block w-100" src={Webpack} alt="Webpack" />
									
								</div>
								<div className="col-3">
									<img id="travis-ci"className="d-block w-100" src={Travis} alt="Travis CI" />
								</div>
								<div className="col-3">
									{" "}
									<img id="npm"className="d-block w-100" src={Npm} alt="Npm" />
								</div>
								<div className="col-3">
                                <img
										id="bootstrap-icon"className="d-block w-100" src={Bootstrap} alt="Bootstrap"/>
								</div>
							</div>
						</div>
                        <div className="carousel-item">
							<div className="row">
								<div className="col-3">
                                <img className="d-block w-100" src={Git} alt="Git" />
									
								</div>
								<div className="col-3">
									<img className="d-block w-100" src={Jest} alt="Jest" />
								</div>
								<div className="col-3">
									{" "}
									<img id="rest"className="d-block w-100" src={Rest} alt="Rest" />
								</div>
								<div className="col-3">
                                <img
									 className="d-block w-100" src={Html} alt="Html"/>
								</div>
							</div>
						</div>
                        <div className="carousel-item">
							<div className="row">
								<div className="col-3">
                                <img className="d-block w-100" src={MySQL} alt="MySQL" />
									
								</div>
								<div className="col-3">
									<img id="pwa-icon"className="d-block w-100" src={PWA} alt="PWA" />
								</div>
								<div className="col-3">
									{" "}
									<img className="d-block w-100" src={Saas} alt="Saas" />
								</div>
								<div className="col-3">
                                <img
									 className="d-block w-100" src={CSS} alt="CSS"/>
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
