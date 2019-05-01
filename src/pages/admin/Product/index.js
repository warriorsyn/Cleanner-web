import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import NavBar from "../../../components/NavBar";
import { Container, Button } from "./styles";

class Product extends Component {
  componentDidMount() {
    this.props.getProductsRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getProductsRequest();
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.product.products.data &&
                    this.props.product.products.data.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>

                        <td>
                          <button className="btn btn-primary btn-sm">
                            More
                          </button>
                        </td>

                        <td>
                          <Button
                            to={`/product/update/${item.id}`}
                            className="btn btn-success btn-sm"
                          >
                            update
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Button className="btn btn-primary" to="/product/new">
            Add Product
          </Button>
          <br />
          <Button className="btn btn-secondary" to="/product/request">
            See Request
          </Button>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
