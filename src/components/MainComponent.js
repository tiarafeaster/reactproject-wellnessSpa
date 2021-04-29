import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import RateInfo from "./RateInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { PACKAGES } from "../shared/packages";

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
				<Header />
				<Directory
					packages={this.state.packages}
					onClick={(rateId) => this.onRateSelect(rateId)}
				/>
				<RateInfo
					rates={
						this.state.packages.filter(
							(rate) => rate.id === this.state.selectedRates
						)[0]
					}
				/>
				<Footer />
			</div>
		);
	}
}

export default Main;
