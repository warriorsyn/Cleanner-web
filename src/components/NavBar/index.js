import React, { Fragment } from "react";
import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { LinkBar, Navbar } from "./styles";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Fragment>
        <Navbar style={{ background: "#8ac542" }} light expand="md">
          <NavbarBrand style={{ color: "white" }} href="/home">
            Admin ({localStorage.getItem("@cleaner:user")})
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkBar to="/home">Home</LinkBar>
              </NavItem>
              <NavItem>
                <LinkBar to="/client">Client</LinkBar>
              </NavItem>
              <NavItem>
                <LinkBar to="/worker">Worker</LinkBar>
              </NavItem>
              <NavItem>
                <LinkBar to="/schedule">Schedule</LinkBar>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
