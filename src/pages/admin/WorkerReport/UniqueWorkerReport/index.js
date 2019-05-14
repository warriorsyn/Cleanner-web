import React, { Component, Fragment } from "react";
import { Col, Row, Label, Input, Button, Table } from "reactstrap";

import NavBar from "../../../../components/NavBar";
import { Container, Form } from "./styles";

import moment from "moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HoursActions from "../../../../store/ducks/hours";

class UniqueWorkerReport extends Component {
  state = {
    firstDate: new Date(),
    secondDate: new Date()
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    const a = this.props.getHoursReportRequest(
      this.props.match.params.id,
      `${moment(this.state.firstDate).format("YYYY-MM-DD")}`,
      `${moment(this.state.secondDate).format("YYYY-MM-DD")}`
    );

    if (!a) {
      console.log("nada");
    }
  };

  render() {
    // if (!this.props.report.report.data) {
    //   return <h2>Loading...</h2>;
    // }

    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handlerSubmit}>
                <h2>Worker Report</h2>
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
                          {/* <td>
                            {moment(item.finished_job)
                              .add(1, "hours")
                              .format("hh:mm DD/MM/YYYY")}
                          </td> */}
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
                {/* 
                {this.props.report.report.sum && (
                  <strong>
                    Total: {this.props.report.report.sum[0].sum_report.hours}: 0
                    {this.props.report.report.sum[0].sum_report.minutes}
                  </strong>
                )} */}

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(HoursActions, dispatch);

const mapStateToProps = state => ({
  report: state.hours
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniqueWorkerReport);
