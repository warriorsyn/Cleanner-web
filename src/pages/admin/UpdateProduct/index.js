import React, { Component, Fragment } from "react";
import { FormGroup, Label, Col, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import { Link } from "react-router-dom";

import NavBar from "../../../components/NavBar";
import { Form, Container, UnInput } from "./styles";

class UpdateProduct extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => this.props.getProductByIdRequest(this.props.match.params.id);

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadData();
      alert("changed");
    }
  }

  handleSubmit = data => {
    const { name, code, quantity } = data;
    const id = this.props.match.params.id;
    this.props.updateProductsRequest(name, code, quantity, id);
  };

  render() {
    const { product } = this.props;
    if (!product.single.data) {
      return <h2>Loading</h2>;
    }

    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Link to="/product">Back</Link>
              <Form
                initialData={this.props.product.single.data}
                onSubmit={this.handleSubmit}
              >
                <h2>Update Product</h2>
                {this.props.product.single.data && (
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <UnInput
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                    />

                    <Label for="code">Code</Label>
                    <UnInput
                      className="form-control"
                      id="code"
                      name="code"
                      type="text"
                    />

                    <Label for="quantity">Quantity</Label>
                    <UnInput
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="0"
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
