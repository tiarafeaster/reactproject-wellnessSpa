import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import RateInfo from "./RateInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { PACKAGES } from "../shared/packages";
import { AMENITIES } from "../shared/amenities";
import { HOLISTIC } from "../shared/holistic";
import { OUTDOORS } from "../shared/outdoors";
import { RESTAURANTS } from "../shared/restaurants";
import { SPA } from "../shared/spa";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packages: PACKAGES,
			amenities: AMENITIES,
			holistic: HOLISTIC,
			outdoors: OUTDOORS,
			restaurants: RESTAURANTS,
			spa: SPA,
		};
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					holistic={
						this.state.holistic.filter((holistic) => holistic.featured)[0]
					}
					outdoors={
						this.state.outdoors.filter((outdoors) => outdoors.featured)[0]
					}
					restaurants={
						this.state.restaurants.filter(
							(restaurants) => restaurants.featured
						)[0]
					}
					spa={this.state.spa.filter((spa) => spa.featured)[0]}
				/>
			);
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route
						exact
						path="/directory"
						render={() => <Directory rate={this.state.packages} />}
					/>
					<Route exact path="/contactus" component={Contact} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
