import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRates: null,
		};
	}

	onRateSelect(rates) {
		this.setState({ selectedRates: rates });
	}

	renderSelectedRate(rates) {
		if (rates) {
			return (
				<Card>
					<CardImg top src={rates.image} alt={rates.room} />
					<CardBody>
						<CardTitle>{rates.room}</CardTitle>
						<CardText>{rates.description}</CardText>
						<CardText>{rates.amenities}</CardText>
					</CardBody>
				</Card>
			);
		}
		return <div />;
	}

	render() {
		const directory = this.props.packages.map((rates) => {
			return (
				<div key={rates.id} className="col-md 5 m-1">
					<Card onClick={() => this.onRateSelect(rates)}>
						{/* need to fix height on second pic */}
						<CardImg width="100%" src={rates.image} alt={rates.room} />
						<CardImgOverlay>
							<CardTitle>{rates.room}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{directory}</div>
				<div className="row">
					<div className="col-md-5 m-1">
						{this.renderSelectedRate(this.state.selectedRates)}
					</div>
				</div>
			</div>
		);
	}
}

export default Directory;
