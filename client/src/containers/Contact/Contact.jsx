import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	render() {
		return (
			<>
				<div className="container-fluid" id="contact-container">
					<h1 id="center-header-section-text">Contact</h1>

					<div className="row">
						<div className="col-sm-12">
							<form className="block form-horizontal" id="contact-form">
								<div className="form-group">
									<label for="name" className="col-sm-2 control-label">
										Name
									</label>
									<div className="col-sm-10">
										<input
											type="email"
											className="form-control"
											id="name"
											placeholder="Name"
										/>
									</div>
								</div>
								<div className="form-group">
									<label for="email" className="col-sm-2 control-label">
										Email
									</label>
									<div className="col-sm-10">
										<input
											type="password"
											className="form-control"
											id="email"
											placeholder="Email"
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-sm-2 control-label" for="msg">
										Message
									</label>
									<div className="col-sm-10">
										<textarea
											id="msg"
											className="form-control"
											rows="3"
											placeholder="Message"
										></textarea>
									</div>
								</div>
								<button className="btn btn-dark">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Contact;
