import React, { Component } from "react";
import JavascriptIcon from "../../images/javascript.png";
import "./SkillsCarousel.css";
import NodeJS from "../../images/nodejs.png";
import MySQL from "../../images/MySQL.png";
import REACT from "../../images/reactjs.png";
import $ from "jquery";

class SkillsCarousel extends Component {
	render() {
		return (
			<>
				<div
					id="carouselExampleControls"
					class="carousel slide "
					data-ride="carousel"
					data-interval="false"
				>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div className="row">
								<div class="col-3">
									<img
                                    id="javascript"
										class="d-block w-100"
										src={JavascriptIcon}
										alt="First slide"
									/>
								</div>
								<div class="col-3">
									<img class="d-block w-100" src={NodeJS} alt="Second slide" />
								</div>
								<div class="col-3">
									{" "}
									<img class="d-block w-100" src={REACT} alt="Third slide" />
								</div>
								<div class="col-3">
									<img class="d-block w-100" src={MySQL} alt="Third slide" />
								</div>
							</div>
						</div>
					</div>
					<a
						class="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</>
		);
	}
}

export default SkillsCarousel;
