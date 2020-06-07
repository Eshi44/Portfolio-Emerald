import React, { Component } from "react";
import "./Contact.css";
import EmeraldS from "../../images/emerald-tag.png";

class Contact extends Component {
	render() {
		return (
			<>
				<div className="container-fluid" id="contact-container">
					<h1 id="center-text-header">Contact</h1>

					<div className="row">
						<div className="col-sm-12" id="get-in-touch">
						<p id="contact-text">I am currently looking for new opportunities!</p> 

						<a href="mailto:e.hameliervolino@gmail.com?Subject="><button
									type="button"
									id="button-contact"
									className="btn btn-outline-success"
								>
									Say Hello 
								</button> </a>
						</div>
					</div>
					<img
										
										src={EmeraldS}
										alt="emerald"
										
									/>
				</div>
				<hr></hr>
			</>
		);
	}
}
export default Contact;
