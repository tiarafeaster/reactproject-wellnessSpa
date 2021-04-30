import React from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDirectoryItem({ rates }) {
	return (
		<Card>
			<Link to={`/directory/${rates.id}`}>
				{/* need to fix height on Cabin pic */}
				<CardImg width="100%" src={rates.image} alt={rates.room} />
				<CardImgOverlay>
					<CardTitle>{rates.room}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

function Directory(props) {
	const directory = props.rates.map((rates) => {
		return (
			<div key={rates.id} className="col-md 5 m-1">
				<RenderDirectoryItem rates={rates} />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home"> Home </Link>
						</BreadcrumbItem>
						<BreadcrumbItem active> Directory </BreadcrumbItem>
					</Breadcrumb>
					<h2>Directory</h2>
					<hr />
				</div>
			</div>

			<div className="row">{directory}</div>
		</div>
	);
}

export default Directory;
