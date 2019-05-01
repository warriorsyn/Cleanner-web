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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/worker/myschedules">
            Worker ({localStorage.getItem("@cleaner:user")})
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkBar to="/worker/myschedules">Schedules</LinkBar>
              </NavItem>
              <NavItem>
                <LinkBar to="/worker/products">Products</LinkBar>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
