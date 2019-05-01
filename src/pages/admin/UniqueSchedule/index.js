import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ScheduleActions from "../../../store/ducks/schedule";
import moment from "moment";

import NavBar from "../../../components/NavBar";
class UniqueSchedule extends Component {
  componentDidMount() {
    this.props.getScheduleByIdRequest(this.props.match.params.id);
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Link to="/schedule">Back</Link>
              <Form onSubmit={this.handleSubmit}>
                {this.props.schedule.scheduleById.data && (
                  <div>
                    <span>
                      Work: {this.props.schedule.scheduleById.data.work}
                    </span>
                    <span>
                      Observation:{" "}
                      {!this.props.schedule.scheduleById.data.observe
                        ? "None"
                        : this.props.schedule.scheduleById.data.observe}
                    </span>
                    <span>
                      Address: {this.props.schedule.scheduleById.data.address}
                    </span>
                    <span>
                      Work date:{" "}
                      {moment(
                        this.props.schedule.scheduleById.data.date_time
                      ).format("DD/MM/YYYY")}
                    </span>
                    <div>
                      <span>Checklist: </span>
                      {this.props.schedule.scheduleById.data.checklist &&
                        this.props.schedule.scheduleById.data.checklist.map(
                          checklist => (
                            <div key={checklist.id}>
                              <span>{checklist.task}</span>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ScheduleActions, dispatch);

const mapStateToProps = state => ({
  schedule: state.schedule
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniqueSchedule);
