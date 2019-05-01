import React, { Component, Fragment } from "react";
import { FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import NavBar from "../../../components/NavBar";
import { Form, Container } from "./styles";

class UpdateProduct extends Component {
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

  componentDidMount() {
    this.props.getProductByIdRequest(this.props.match.params.id);
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, code, quantity } = this.state;
    const id = this.props.match.params.id;
    this.props.updateProductsRequest(name, code, quantity, id);
  };

  render() {
    const { product } = this.props;
    console.log(this.state);
    if (!product.single.data) {
      return <h2>Loading</h2>;
    }

    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <h2>Update Product</h2>
                {this.props.product.single.data && (
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={product.single.data.name}
                      onChange={this.handleInputChange}
                    />

                    <Label for="code">Code</Label>
                    <Input
                      id="code"
                      name="code"
                      type="text"
                      onChange={this.handleInputChange}
                      defaultValue={this.state.code}
                    />

                    <Label for="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      defaultValue={product.single.data.quantity}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                )}
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

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProduct);