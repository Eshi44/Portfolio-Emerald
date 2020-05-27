import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ThirdWave from "../../images/third-wave-coffee.png";
import ThirdWaveMain from "../../images/third-wave.jpg";
import "./Pages.css";

class ThirdWaveCoffee extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container">
					<div className="row" id="margin-space">
						<div className=" col-md-6 col-lg-6 col-xl-6">
						
							<img id="third-wave-img" src={ThirdWaveMain} />
						</div>

						<div className=" col-md-6 col-lg-6 col-xl-6">

                 
                   <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button>
                        <button id="button-skills" type="button" class="btn btn-primary">MongoDB</button> 

                        </div>
                     
					</div>
				</div>
			</>
		);
	}
}

export default ThirdWaveCoffee;
