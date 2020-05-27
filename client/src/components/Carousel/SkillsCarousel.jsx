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
import Sass from "../../images/sass.png";
import CSS from "../../images/css.png";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReactTooltip from "react-tooltip";

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
					<div><img data-tip data-for="js" id="skill-img" src={JavascriptIcon} />
					<ReactTooltip id="js" type="dark">
						<span>JavaScript</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="nodejs" id="skill-img" src={NodeJS} />
					<ReactTooltip id="nodejs" type="dark">
						<span>Node.js</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="react" id="skill-img" src={REACT} />
					<ReactTooltip id="react" type="dark">
						<span>React.js</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="mongo" id="skill-img" src={Mongo} />
					<ReactTooltip id="mongo" type="dark">
						<span>MongoDB</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="heroku" id="skill-img" src={Heroku} />
					<ReactTooltip id="heroku" type="dark">
						<span>Heroku</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="handlebars" id="skill-img" src={Handlebars} />
					<ReactTooltip id="handlebars" type="dark">
						<span>Handlebars.js</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="jQuery" id="skill-img" src={jQuery} />
					<ReactTooltip id="jQuery" type="dark">
						<span>jQuery</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="express" id="skill-img" src={Express} />
					<ReactTooltip id="express" type="dark">
						<span>Express.js</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="webpack" id="skill-img" src={Webpack} />
					<ReactTooltip id="webpack" type="dark">
						<span>Webpack</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="travis" id="skill-img" src={Travis} />
					<ReactTooltip id="travis" type="dark">
						<span>Travis CI</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="npm" id="skill-img" src={Npm} />
					<ReactTooltip id="npm" type="dark">
						<span>Node Package Manager</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="bootstrap" id="skill-img" src={Bootstrap} />
					<ReactTooltip id="bootstrap" type="dark">
						<span>Bootstrap</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="git" id="skill-img" src={Git} />
					<ReactTooltip id="git" type="dark">
						<span>Git</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="jest" id="skill-img" src={Jest} />
					<ReactTooltip id="jest" type="dark">
						<span>Jest</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="rest" id="skill-img" src={Rest} />
					<ReactTooltip id="rest" type="dark">
						<span>REST</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="html" id="skill-img" src={Html} />
					<ReactTooltip id="html" type="dark">
						<span>HTML5</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="mysql" id="skill-img" src={MySQL} />
					<ReactTooltip id="mysql" type="dark">
						<span>MySQL</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="pwa" id="skill-img" src={PWA} />
					<ReactTooltip id="pwa" type="dark">
						<span>Progressive Web Apps</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="sass" id="skill-img" src={Sass} />
					<ReactTooltip id="sass" type="dark">
						<span>SASS</span>
					</ReactTooltip></div>
					<div><img data-tip data-for="css" id="skill-img" src={CSS} />
					<ReactTooltip id="css" type="dark">
						<span>CSS</span>
					</ReactTooltip></div>
				</Carousel>
			</>
		);
	}
}

export default SkillsCarousel;
