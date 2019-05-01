import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import WorkerNavBar from "../../../components/WorkerNavBar";
import { Container } from "./styles";

class Products extends Component {
  componentDidMount() {
    this.props.getOrderByWorkerIdRequest();
  }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps !== this.props) {
  //       this.props.getOrderByWorkerIdRequest();
  //     }
  //   }

  render() {
    console.log(this.props);
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
                  </tr>
                </thead>
                <tbody>
                  {this.props.product.orderByWorkerId.data &&
                    this.props.product.orderByWorkerId.data.map(item => (
                      <tr key={item.id}>
                        <td>
                          {item.name}{" "}
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
