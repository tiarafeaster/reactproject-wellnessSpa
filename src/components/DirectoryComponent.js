import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderDirectoryItem({ rates }) {
	return (
		<Card>
			{/* need to fix height on Cabin pic */}
			<CardImg width="100%" src={rates.image} alt={rates.room} />
			<CardImgOverlay>
				<CardTitle>{rates.room}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

function Directory(props) {
	const directory = props.packages.map((rates) => {
		return (
			<div key={rates.id} className="col-md 5 m-1">
				<RenderDirectoryItem rates={rates} />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">{directory}</div>
		</div>
	);
}

export default Directory;
