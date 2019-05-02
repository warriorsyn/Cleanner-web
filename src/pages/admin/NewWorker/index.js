import React, { Component, Fragment } from "react";
import { Row, Col, FormGroup, Input, Label, Button } from "reactstrap";
import { Container, Form } from "./styles";

import NavBar from "../../../components/NavBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WorkerActions from "../../../store/ducks/worker";
import { Link } from "react-router-dom";
class NewWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    //call function (email, name, address)
    this.props.createWorkerRequest(name, email, password);
  };
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Link to="/worker">Back</Link>
              <Form onSubmit={this.handleSubmit}>
                <h2>New Worker</h2>
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

                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
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
  bindActionCreators(WorkerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(NewWorker);
