import React, { Component } from "react";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { PACKAGES } from "../shared/packages";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleBooking = this.handleBooking.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleBooking(event) {
		alert(`Thank you ${this.name.value}! We will see you on!!`);
		this.toggleModal();
		event.preventDefault();
	}

	render() {
		return (
			<>
				<Jumbotron fluid>
					<div className="container">
						<div className="row">
							<div className="col">
								<h1>Zen Den Wellness Retreat</h1>
								<h2>Your dream getaway</h2>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Navbar dark sticky="top" expand="md">
					<div className="container">
						<NavbarBrand className="mr-auto" href="/">
							<img
								src="/assets/images/yin-yang.png"
								height="30"
								width="30"
								alt="yin yang logo"
							/>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<i className="fa fa-home fa-lg" />
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/directory">
										<i className="fa fa-list fa-lg" />
										Directory
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
										<i className="fa fa-info fa-lg" />
										About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<i className="fa fa-address-card fa-lg" />
										Contact Us
									</NavLink>
								</NavItem>
							</Nav>
							<span className="navbar-text ml-auto">
								<Button onClick={this.toggleModal}>
									<i className="fas fa-globe fa-lg" /> Book Now
								</Button>
							</span>
						</Collapse>
					</div>
				</Navbar>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Book Now</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleBooking}>
							<FormGroup>
								<Label htmlFor="name">Name</Label>
								<Input
									type="text"
									id="name"
									name="name"
									innerRef={(input) => (this.name = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email">Email</Label>
								<Input
									type="email"
									id="email"
									name="email"
									innerRef={(input) => (this.email = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="phoneNum">Phone Number</Label>
								<Input
									type="tel"
									id="phoneNum"
									name="phoneNum"
									innerRef={(input) => (this.phoneNum = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="rates">Packages</Label>
								<Input type="select" id="rates" name="rates">
									<option>{}</option>
									<option>{}</option>
									<option>{}</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="rates">Number of Guests</Label>
								<Input type="select" id="numGuests" name="numGuests">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>3+</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="rates">Number of Nights</Label>
								<Input type="select" id="numNights" name="numNights">
									<option>3</option>
									<option>5</option>
									<option>7</option>
									<option>7+</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="date">Select Dates</Label>
								<Input type="date" id="date" name="date"></Input>
							</FormGroup>
							<Button type="submit" value="submit" color="primary">
								Book
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</>
		);
	}
}

export default Header;
