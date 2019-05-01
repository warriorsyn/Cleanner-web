import React, { Fragment } from "react";
import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { LinkBar, Navbar, Button } from "./styles";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import AuthActions from "../../store/ducks/auth";

class WorkerNavBar extends React.Component {
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
              <NavItem>
                <LinkBar to="/worker/requested">Requested products</LinkBar>
              </NavItem>
              <NavItem>
                <Button
                  onClick={this.logout}
                  style={{ marginTop: 5 }}
                  className="btn btn-danger"
                >
                  Logout
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(WorkerNavBar);
