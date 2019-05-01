import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import NavBar from "../../../components/NavBar";
import { Container, Button } from "./styles";

class OrdersProduct extends Component {
  componentDidMount() {
    this.props.getOrdersRequest();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getOrdersRequest();
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Button to="/product">Back</Button>
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Schedule</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.product.orders.data &&
                    this.props.product.orders.data.map(item => (
                      <tr key={item.id}>
                        <td>{item.product.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.schedule.work}</td>

                        <td>
                          <button className="btn btn-primary btn-sm">Ok</button>
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
)(OrdersProduct);
