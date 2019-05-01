import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import WorkerNavBar from "../../../components/WorkerNavBar";
import { Container, Button } from "./styles";

class Products extends Component {
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
        <WorkerNavBar />
        <Container>
          <Row>
            <Col>
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
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
                          <Button
                            to={`/worker/products/${item.id}`}
                            className="btn btn-primary btn-sm"
                          >
                            More
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
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
)(Products);
