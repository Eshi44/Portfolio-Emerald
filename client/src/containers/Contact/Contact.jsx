import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	render() {
		return (
			<>
				<div class="container-fluid" id="contact-container">
					<h1 id="center-header-section-text">Contact</h1>

					<div class="row">
						<div class="col-sm-12">
							<form class="block form-horizontal" id="contact-form">
								<div class="form-group">
									<label for="name" class="col-sm-2 control-label">
										Name
									</label>
									<div class="col-sm-10">
										<input
											type="email"
											class="form-control"
											id="name"
											placeholder="Name"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="email" class="col-sm-2 control-label">
										Email
									</label>
									<div class="col-sm-10">
										<input
											type="password"
											class="form-control"
											id="email"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label" for="msg">
										Message
									</label>
									<div class="col-sm-10">
										<textarea
											id="msg"
											class="form-control"
											rows="3"
											placeholder="Message"
										></textarea>
									</div>
								</div>
								<button class="btn btn-dark">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Contact;
