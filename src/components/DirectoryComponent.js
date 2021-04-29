import React, { Component } from "react";

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packages: [
				{
					id: 0,
					room: "Standard",
					image: "assets/images/standard-room.jpeg",
					description:
						" The all-inclusive standard room is a nested inside a block of hotel-like rooms.",
					amenities:
						"All spa services, access to one restaurant, choice of one group or individual therapy session, daily yoga and meditation.",
				},
				{
					id: 1,
					room: "Cabin",
					image: "assets/images/cabin-room.jpeg",
					description:
						"The all-inclusive cabin room is nestled inside the woods of our spa.",
					amenities:
						"All spa services, access to both restaurants, choice of two group or individual therapy sessions, daily yoga and meditation (including goat yoga when available), access to infinity pool.",
				},
				{
					id: 2,
					room: "Villa",
					image: "assets/images/villa-room.jpeg",
					description:
						"The all-inclusive cabin room is nestled in it's own hot spring river and waterfalls.",
					amenities:
						"All spa services, access to both restaurants, choice of 4 group or individual therapy sessions, daily yoga and meditation (including goat yoga when available), access to infinity pool, exclusive access to pivate hot spring river and waterfall.",
				},
			],
		};
	}

	render() {
		const directory = this.state.packages.map((rates) => {
			return (
				<div key = {rates.id} className="col">
					<img src={rates.image} alt={rates.room} />
					<h2>{rates.room}</h2>
					<p>{rates.description}</p>
					<p>{rates.amenities}</p>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{directory}</div>
			</div>
		);
	}
}

export default Directory;
