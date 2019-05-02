import React, { Component, Fragment } from "react";
import { FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import { Form, Container } from "./styles";

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      name: "",
      quantity: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, code, quantity } = this.state;

    this.props.createProductsRequest(name, code, quantity);
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Link to="/product">Back</Link>
              <Form onSubmit={this.handleSubmit}>
                <h2>New Product</h2>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={this.handleInputChange}
                  />

                  <Label for="code">Code</Label>
                  <Input
                    id="code"
                    name="code"
                    type="text"
                    onChange={this.handleInputChange}
                  />

                  <Label for="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
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
  bindActionCreators(ProductActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(NewProduct);
