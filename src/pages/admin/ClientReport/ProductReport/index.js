import React, { Component, Fragment } from "react";
import { Col, Row, Label, Input, Button, Table } from "reactstrap";

import { Link } from "react-router-dom";

import NavBar from "../../../../components/NavBar";
import { Container, Form } from "./styles";

import moment from "moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProductActions from "../../../../store/ducks/product";

class ProductReport extends Component {
  state = {
    firstDate: new Date(),
    secondDate: new Date()
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.getProductReportRequest(
      this.props.match.params.id,
      `${moment(this.state.firstDate).format("YYYY-MM-DD")}`,
      `${moment(this.state.secondDate).format("YYYY-MM-DD")}`
    );

    console.log(this.props);
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Link to="/client/report">Back</Link>
              <Form onSubmit={this.handlerSubmit}>
                <h2>Client Product Report</h2>
                <Row>
                  <Col sm="5" xs="12">
                    <Label for="first">Date 01</Label>
                    <Input
                      name="firstDate"
                      onChange={this.handleInputChange}
                      type="date"
                      id="first"
                    />
                  </Col>
                  <Col sm="5" xs="12">
                    <Label for="second">Date 02</Label>
                    <Input
                      name="secondDate"
                      onChange={this.handleInputChange}
                      type="date"
                      id="second"
                    />
                  </Col>

                  <Col sm="2">
                    <br />
                    <Button color="primary">Search</Button>
                  </Col>
                </Row>
                <br />
                <Table striped>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>quantity</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.productReport.productReport.data ? (
                      this.props.productReport.productReport.data.map(item => (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {moment(item.finished_order).format("DD/MM/YYYY")}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div id="nothing">
                        <span>Please, choose the first and second date</span>
                      </div>
                    )}
                  </tbody>
                </Table>
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
  productReport: state.product
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductReport);
