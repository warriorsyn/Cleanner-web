import React, { Component, Fragment } from "react";
import { Col, Row, Label, Input, Button, Table } from "reactstrap";

import NavBar from "../../../../components/NavBar";
import { Container, Form } from "./styles";

import moment from "moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClientActions from "../../../../store/ducks/client";

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
    this.props.getClientReportRequest(
      this.props.match.params.id,
      `${moment(this.state.firstDate).format("YYYY-MM-DD")}`,
      `${moment(this.state.secondDate).format("YYYY-MM-DD")}`
    );

    console.log(this.props);
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
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
                    {this.props.report.report.data &&
                      this.props.report.report.data.map(item => (
                        <tr>
                          <td>
                            {moment(item.finished_job).format("DD/MM/YYYY")}
                          </td>
                          <td>{item.time_worked}</td>
                        </tr>
                      ))}
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
  bindActionCreators(ClientActions, dispatch);

const mapStateToProps = state => ({
  report: state.client
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniqueClientReport);
