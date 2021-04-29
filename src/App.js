import React, { COMPONENT } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="App">
        <Navbar dark color="prinmary">
          <div className="container">
            <NavbarBrand href ="/">Zen Den Wellness Retreat </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );   
  }
}

export default App;