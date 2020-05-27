import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PokeMain from "../../images/poke-battle-screenshot.png";

import "./Pages.css";

class PokeBattle extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container" id="gray-bkgd">
					<div className="row" id="margin-space">
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<img id="page-portfolio-img" src={PokeMain} />
						</div>
						<div className=" col-md-2 col-lg-2 col-xl-2"></div>
						<div className=" col-md-5 col-lg-5 col-xl-5">
							<h1
								id="title-of-page"
								className="animate__animated animate__bounceInRight"
							>
								PokeBattle
							</h1>

							<button id="button-skills" type="button" class="btn btn-primary">
								Express
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Foundation.css
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Handlebars
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
								Nes.css
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Node.js
							</button>
							<button id="button-skills" type="button" class="btn btn-primary">
								Travis CI
							</button>

							<p id="info-on-project">
								{" "}
								This is a Node Express MySQL application that allows users to
								settle their arguments through battling Pokemon <p></p>
								With the help of Pokémon API, a modern-day Pokémon equivalent to
								the coin toss was created. After reviewing the rules, users can
								start battle. Both trainers enter their username and generate a
								Pokémon. The battle button will quickly generate a winner and
								display the number of wins.
							</p>
							<a
								href="https://pokemonbattles-app.herokuapp.com/"
								target="blank"
							>
								<button id="button-links" type="button" class="btn btn-primary">
									Website
								</button>{" "}
							</a>
							<a href="https://github.com/Eshi44/PokeBattle" target="blank">
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

export default PokeBattle;
