import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import RateInfo from "./RateInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
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

		const RatesWithId = ({ match }) => {
			return (
				<RateInfo
					rates={
						this.state.packages.filter(
							(rates) => rates.id === +match.params.ratesId
						)[0]
					}
					amenities={this.state.amenities.filter(
						(amenities) => amenities.rateId === +match.params.ratesId
					)}
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
						render={() => <Directory rates={this.state.packages} />}
					/>
					<Route exact path="/contactus" component={Contact} />
					<Route path="/directory/:ratesId" component={RatesWithId} />
					<Route
						exact
						path="/aboutus"
						render={() => (
							<About
								outdoors={this.state.outdoors}
								restaurants={this.state.restaurants}
							/>
						)}
					/>
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
