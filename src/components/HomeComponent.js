import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
	return (
		<Card>
			<CardImg top src={item.image} alt={item.service} />
			<CardBody>
				<CardTitle>{item.service}</CardTitle>
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	);
}

function Home(props) {
	return (
		<div className="container">
			<div className="row ">
				<div className="col-md-12">
					<h2>
						What starts out as a few nights of relation, turns into a lifetime
						of freedom{" "}
					</h2>
					<h4>Disconnect from the world around you</h4>
				</div>
				{/*need to fix so that prop shows up for each separate amenity */}
				<div className="col-md m-1">
					<RenderCard item={props.holistic} />
				</div>
				<div className="col-md m-1">
					<RenderCard item={props.outdoors} />
				</div>
				<div className="col-md m-1">
					<RenderCard item={props.restaurants} />
				</div>
				<div className="col-md m-1">
					<RenderCard item={props.spa} />
				</div>
			</div>
		</div>
	);
}

export default Home;
