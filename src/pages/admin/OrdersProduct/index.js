import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import NavBar from "../../../components/NavBar";
import { Container, Button } from "./styles";
import moment from "moment";

class OrdersProduct extends Component {
  componentDidMount() {
    this.props.getOrdersRequest();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getOrdersRequest();
    }
  }

  handlerClick = id => {
    this.props.updateOrderRequest(id);
    this.props.updateFinishRequest(id, moment().format("YYYY-MM-DD"));
  };

  render() {
    console.log(this.props.product);
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
                        <td>
                          {item.product.name}{" "}
                          {item.status ? (
                            <i
                              style={{ color: "green " }}
                              className="fas fa-check-circle"
                            />
                          ) : (
                            <i className="fas fa-hourglass-end" />
                          )}
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.schedule.work}</td>

                        <td>
                          <button
                            onClick={() => this.handlerClick(item.id)}
                            className="btn btn-primary btn-sm"
                          >
                            Ok
                          </button>
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
