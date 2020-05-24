import React, { Component } from "react";
import Project from "./Project";
class TotalProjects extends Component {

	render() {
		return (
            <>
            <div className="row justify-content-center">
			<div className="row">
				<div className="col-sm-6 col-md-6 col-lg-6">
					<Project
						link="https://pokemonbattles-app.herokuapp.com/"
						img="./assets/img/PokeBattle.jpg"
						title="PokeBattle"
						githubUrl="https://github.com/Eshi44/PokeBattle"
					/>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<Project
						link="https://eshi44.github.io/concerthunt/"
						img="./assets/img/Concert-Hunt.png"
						title="Concert Hunt"
						githubUrl="https://github.com/Eshi44/concerthunt"
					/>
				</div>
			</div>
            <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
                <Project
                    link="https://eshi44.github.io/Employee-Directory/"
                    img="./assets/img/employee-directory.jpg"
                    title="Employee Directory"
                    githubUrl="https://github.com/Eshi44/Employee-Directory"
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
                <Project
                    link="https://eat-da-burger-log-da-burger.herokuapp.com/"
                    img="./assets/img/Eat-da-burger.png"
                    title="Eat-Da-Burger"
                    githubUrl="https://github.com/Eshi44/Eat-Da-Burger"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
                <Project
                    link="https://on-off-budget-tracker-pwa.herokuapp.com/"
                    img="./assets/img/budget.jpg"
                    title="Online Offline Budget Tracker"
                    githubUrl="https://github.com/Eshi44/Online-Offline-Budget-Trackers"
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
                <Project
                    link="https://wourkout-tracker-applications.herokuapp.com/"
                    img="./assets/img/workout.jpg"
                    title="Workout Tracker"
                    githubUrl="https://github.com/Eshi44/Workout-Tracker"
                />
            </div>
        </div>
        </div>
        </>
		);
	}
}

export default TotalProjects;
