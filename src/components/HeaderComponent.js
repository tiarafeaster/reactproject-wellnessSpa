import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
	render() {
		return (
			<>
				<Jumbotron fluid>
					<div className="container">
						<div className="row">
							<div className="col">
								<h1>Zen Den Wellness Retreat</h1>
								<h2>Your dream getaway</h2>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Navbar dark sticky="top">
					<div className="container">
						<NavbarBrand href="/">Zen Den Wellness Retreat</NavbarBrand>
					</div>
				</Navbar>
			</>
		);
	}
}

export default Header;