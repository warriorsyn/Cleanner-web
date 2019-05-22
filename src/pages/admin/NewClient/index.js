import React, { Component, Fragment } from "react";
import { FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClientActions from "../../../store/ducks/client";

import NavBar from "../../../components/NavBar";
import { Form, Container } from "./styles";
import { Link } from "react-router-dom";

class NewClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      address: "",
      phone: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, address, phone } = this.state;

    //call function (email, name, address)

    this.props.createClientRequest(name, email, address, phone);
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Link to="/client">Back</Link>
              <Form onSubmit={this.handleSubmit}>
                <h2>New client</h2>
                <FormGroup>
                  <Label for="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={this.handleInputChange}
                  />

                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={this.handleInputChange}
                  />

                  <Label for="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    onChange={this.handleInputChange}
                  />

                  <Label for="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <Button color="primary">Save</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ClientActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(NewClient);
