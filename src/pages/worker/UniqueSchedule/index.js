import React, { Component, Fragment } from "react";
import { Row, Col, FormGroup, Input, Label, Button } from "reactstrap";
import { Container, Form } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ScheduleActions from "../../../store/ducks/schedule";
import moment from "moment";

import WorkerNavBar from "../../../components/WorkerNavBar";
class UniqueSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const clientId = this.props.match.params.clientid;
    // console.log("id", id, "clientid", clientId);

    this.props.finishScheduleRequest(
      id,
      clientId,
      this.state.time,
      moment().format("YYYY-MM-DD")
    );
  };

  componentDidMount() {
    this.props.getScheduleByIdRequest(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <WorkerNavBar />
        <Container>
          <Row>
            <Col>
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
                      Work date:{" "}
                      {moment(
                        this.props.schedule.scheduleById.data.date_time
                      ).format("DD/MM/YYYY")}
                    </span>
                    <div>
                      <span>Checklist: </span>
                    </div>
                  </div>
                )}
                <br />
                <FormGroup>
                  <Label>Time worked</Label>
                  <Input
                    onChange={this.handleInputChange}
                    type="time"
                    id="time"
                    name="time"
                  />
                </FormGroup>
                {this.props.schedule.scheduleById.data &&
                this.props.schedule.scheduleById.data.status === false ? (
                  <Button color="primary">Finish the job</Button>
                ) : (
                  <span style={{ color: "#f34b4b" }}>
                    "Sorry, you have finished this work already!"
                  </span>
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
