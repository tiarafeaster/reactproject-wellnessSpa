import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class RateInfo extends Component {
	renderRate(rates) {
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

	renderAmenities(amenities) {
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

	render() {
		if (this.props.rates) {
			return (
				<div className="container">
					<div className="row">
						{this.renderRate(this.props.rates)}
						{this.renderAmenities(this.props.rates.amenities)}
					</div>
				</div>
			);
		}
		return <div />;
	}
}

export default RateInfo;
