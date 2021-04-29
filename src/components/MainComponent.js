import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import { PACKAGES } from "../shared/packages";
import RateInfo from "./RateInfoComponent";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packages: PACKAGES,
			selectedRates: null,
		};
	}

	onRateSelect(rateId) {
		this.setState({ selectedRates: rateId });
	}

	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Zen Den Wellness Retreat</NavbarBrand>
					</div>
				</Navbar>
				<Directory
					packages={this.state.packages}
					onClick={rateId => this.onRateSelect(rateId)}
				/>
				<RateInfo rates={this.state.packages.filter(rate => rate.id === this.state.selectedRates)[0]} />
			</div>
		);
	}
}

export default Main;
