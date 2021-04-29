import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponent";
import "./App.css";
import { PACKAGES } from "./shared/packages";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        packages: PACKAGES
      };
    }

	render() {
		return (
			<div className="App">
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Zen Den Wellness Retreat</NavbarBrand>
					</div>
				</Navbar>
        <Directory packages ={this.state.packages} />
			</div>
		);
	}
}


export default App;
