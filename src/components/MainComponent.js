import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import RateInfo from "./RateInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { PACKAGES } from "../shared/packages";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packages: PACKAGES,
		};
	}

	render() {
		const HomePage = () => {
			return <Home />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route
						exact
						path="/directory"
						render={() => <Directory packages={this.state.packages} />}
					/>
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
