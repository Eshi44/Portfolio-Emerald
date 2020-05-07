import React, {Component} from 'react';

class Portfolio extends Component {
    render () {
        return (
           <>

<div className="container-fluid" id="portfolio-container">
			<h1 id="center-header-section-text">Portfolio</h1>
			      
			<div className="row" id="first-row-portfolio">
			  <div className="col-sm-4">
				<a href="https://eshi44.github.io/Day-Planner/"><img className="img-fluid port-image" src="assets\img\Work-Day-Scheduler.png" alt="Schedular"/></a>
			  </div>
			  <div className="col-sm-4">
				<a href="https://eshi44.github.io/Weather-Dashboard/"> <img className="img-fluid port-image" src="assets\img\Weather-Dashboard.png" alt="weather"/></a>
			  </div>
			  <div className="col-sm-4">
				<a href="https://eshi44.github.io/Password-Generator/"><img className="img-fluid port-image" src="assets\img\Password-Generator-Image.png" alt="password"/></a>
			</div>
			  </div>

			  <div className="row" id="second-row-portfolio">
				<div className="col-sm-4">
					<a href="https://tomaspz.github.io/concerthunt/"><img className="img-fluid port-image" src="assets\img\Concert-Hunt.PNG" alt="concert"/></a>
				</div>
				<div className="col-sm-4">
				 
				</div>
				<div className="col-sm-4">
				 
			  </div>
				</div>

			
		  </div>
		  <hr></hr>

          </>
        );
    }
}
export default Portfolio;