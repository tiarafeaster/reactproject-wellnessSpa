import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Directory extends Component {
	render() {
		const directory = this.props.packages.map((rates) => {
			return (
				<div key={rates.id} className="col-md 5 m-1">
					<Card onClick={() => this.props.onClick(rates.id)}>
						{/* need to fix height on Cabin pic */}
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
			</div>
		);
	}
}

export default Directory;
