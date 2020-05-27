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
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class SkillsCarousel extends Component {
	render() {
		return (
			<>
				<Carousel
					autoPlay={2000}
					animationSpeed={1000}
					infinite
					slidesPerScroll={1}
					slidesPerPage={6}
					infinite
					arrows
					centered
					breakpoints={{
						640: {
							slidesPerPage: 1,
							arrows: true,
						},
						900: {
							slidesPerPage: 3,
							arrows: true,
						},
					}}
				>
					<img id="skill-img" src={JavascriptIcon} />
					<img id="skill-img" src={NodeJS} />
					<img id="skill-img" src={REACT} />
					<img id="skill-img" src={Mongo} />
					<img id="skill-img" src={Heroku} />
					<img id="skill-img" src={Handlebars} />
					<img id="skill-img" src={jQuery} />
					<img id="skill-img" src={Express} />
					<img id="skill-img" src={Webpack} />
					<img id="skill-img" src={Travis} />
					<img id="skill-img" src={Npm} />
					<img id="skill-img" src={Bootstrap} />
					<img id="skill-img" src={Git} />
					<img id="skill-img" src={Jest} />
					<img id="skill-img" src={Rest} />
					<img id="skill-img" src={Html} />
					<img id="skill-img" src={MySQL} />
					<img id="skill-img" src={PWA} />
					<img id="skill-img" src={Saas} />
					<img id="skill-img" src={CSS} />
				</Carousel>

			</>
		);
	}
}

export default SkillsCarousel;
