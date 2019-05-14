import React, { Component, Fragment } from "react";
import { Col, Row, Label, Input, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";

import NavBar from "../../../../components/NavBar";
import { Container, Form } from "./styles";

import moment from "moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ClientActions from "../../../../store/ducks/client";
import ProductActions from "../../../../store/ducks/product";

class UniqueClientReport extends Component {
  state = {
    firstDate: new Date(),
    secondDate: new Date()
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.clientDispatch.getClientReportRequest(
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
                <h2>Client Report</h2>
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
                      <th>Date</th>
                      <th>Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.report.report.data ? (
                      this.props.report.report.data.map(item => (
                        <tr>
                          <td>
                            {moment(item.finished_job).format("DD/MM/YYYY")}
                          </td>
                          <td>{item.time_worked}</td>
                        </tr>
                      ))
                    ) : (
                      <div id="nothing">
                        <span>Please, choose the first and second date</span>
                      </div>
                    )}
                  </tbody>
                </Table>
                {this.props.report.report.sum &&
                  this.props.report.report.sum.map(time => {
                    if (!time.sum_report) {
                      return <p />;
                    }

                    const minutesLength = time.sum_report.minutes.toString()
                      .length;
                    const minutes = time.sum_report.minutes;

                    return (
                      <div key={1}>
                        <strong>
                          Total Hours: {time.sum_report.hours}:
                          {minutesLength === 1 ? (
                            <span>0{minutes}</span>
                          ) : (
                            <span>{minutes}</span>
                          )}
                        </strong>
                      </div>
                    );
                  })}
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clientDispatch: bindActionCreators(ClientActions, dispatch),
    productDispatch: bindActionCreators(ProductActions, dispatch)
  };
};

const mapStateToProps = state => ({
  report: state.client,
  productReport: state.product
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniqueClientReport);
