import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderRate({ rates }) {
	return (
		<div className=" col-md-5 m-1">
			<Card>
				<CardImg top src={rates.image} alt={rates.room} />
				<CardBody>
					<CardTitle>{rates.room}</CardTitle>
					<CardText>{rates.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderAmenities({ amenities }) {
	if (amenities) {
		return (
			<div className="col-md-5 m-1">
				<h4>Amenities</h4>
				{amenities.map((amenities) => (
					<div className="p-1" key={amenities.id}>
						<ul>
							<li>{amenities.spa}</li>
							<li>{amenities.holistic}</li>
							<li>{amenities.restaurant}</li>
							<li>{amenities.therapy}</li>
							<li>{amenities.pool}</li>
							<li>{amenities.extra}</li>
						</ul>
					</div>
				))}
			</div>
		);
	}
	return <div />;
}

function RateInfo(props) {
	if (props.rates) {
		return (
			<div className="container">
				<div className="row">
					<RenderRate rates={props.rates} />
					<RenderAmenities amenities={props.rates.amenities} />
				</div>
			</div>
		);
	}
	return <div />;
}

export default RateInfo;
