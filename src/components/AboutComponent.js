import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Card,
	CardBody,
	CardHeader,
    CardImg,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderOutdoor({ outdoor }) {
	if (outdoor) {
		return (
			<>
				<Card>
					<CardImg
						object
						src={outdoor.image}
						alt={outdoor.service}
					/>
					<CardHeader className="ml-5 mb-4">
						<CardBody heading>{outdoor.service}</CardBody>
						{outdoor.description}
					</CardHeader>
				</Card>
			</>
		);
	}
	return <></>;
}

function RenderRestaurant({ restaurant }) {
	if (restaurant) {
		return (
			<>
				<Card>
					<CardImg
						object
						src={restaurant.image}
						alt={restaurant.service}
					/>
					<CardHeader className="ml-5 mb-4">
						<CardBody>{restaurant.service}</CardBody>
						{restaurant.description}
					</CardHeader>
				</Card>
			</>
		);
	}
	return <></>;
}

function About(props) {
	const outdoors = props.outdoors.map((outdoor) => {
		return (
			<Card key={outdoor.id}>
				<RenderOutdoor outdoor={outdoor} />
			</Card>
		);
	});

	const restaurants = props.restaurants.map((restaurant) => {
		return (
			<Card key={restaurant.id}>
				<RenderRestaurant restaurant={restaurant} />
			</Card>
		);
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>About Us</BreadcrumbItem>
					</Breadcrumb>
					<h2>About Us</h2>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-sm-6">
					<h3>Who We Are</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Featured Amenities</h3>
				</div>
				<div className="col-md-6 mt-4">
					<Card>{outdoors}</Card>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Featured Restaurants</h3>
				</div>
				<div className="col-md-6 mt-4">
					<Card>{restaurants}</Card>
				</div>
			</div>
		</div>
	);
}

export default About;
