import React, { Fragment } from "react";
import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { LinkBar, Navbar } from "./styles";

export default class WorkerNavBar extends React.Component {
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

  logout = () => this.props.signOut();

  render() {
    return (
      <Fragment>
        <Navbar style={{ background: "#8ac542" }} light expand="md">
          <NavbarBrand style={{ color: "white" }} href="/worker/home">
            Worker ({localStorage.getItem("@cleaner:user")})
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkBar to="/worker/home">Home</LinkBar>
              </NavItem>
              <NavItem>
                <LinkBar to="/worker/myschedules">Schedule</LinkBar>
              </NavItem>
              <NavItem>
                <LinkBar to="/worker/products">Product</LinkBar>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
