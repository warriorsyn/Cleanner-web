import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { Container, Form } from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";

import NavBar from "../../../components/NavBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WorkerActions from "../../../store/ducks/worker";
import ClientActions from "../../../store/ducks/client";
import ScheduleActions from "../../../store/ducks/schedule";
import { Link } from "react-router-dom";
class NewSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: "",
      observe: "",
      date: new Date(),
      address: "",
      worker: "",
      client: "",
      mock: [17],
      checklist: []
    };
  }

  componentDidMount() {
    this.props.WorkerCreator.getWorkerRequest();
    this.props.ClientCreator.getClientRequest();
  }

  //   componentDidUpdate(prevProps) {
  //     this.props.WorkerCreator.getWorkerRequest();
  //     this.props.ClientCreator.getClientRequest();
  //   }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      work,
      observe,
      date,
      worker,
      client,
      checklist,
      address
    } = this.state;
    this.props.ScheduleCreator.createScheduleRequest(
      work,
      observe,
      date,
      worker,
      client,
      checklist,
      address
    );
  };

  handlerChecklist = e => {
    this.setState(prevState => ({
      checklist: [...prevState.checklist, e.target.value]
    }));
  };

  ckecklistHandler = () => {
    this.setState({
      mock: [...this.state.mock, Math.random()]
    });
  };
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <NavBar />
        <Container>
          <PerfectScrollbar style={{ overflowX: "hidden" }}>
            <Row>
              <Col>
                <Link to="/schedule">Back</Link>
                <Form onSubmit={this.handleSubmit}>
                  <h2>New Schedule</h2>
                  <FormGroup>
                    <Label for="work">Work</Label>
                    <Input
                      id="work"
                      name="work"
                      type="text"
                      onChange={this.handleInputChange}
                    />

                    <Label for="observe">Observation</Label>
                    <Input
                      id="observe"
                      name="observe"
                      type="text"
                      onChange={this.handleInputChange}
                    />

                    <Label for="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      onChange={this.handleInputChange}
                    />

                    <Label for="date">Work date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      onChange={this.handleInputChange}
                    />

                    <Label for="worker">Worker</Label>
                    <select
                      onChange={this.handleInputChange}
                      id="worker"
                      name="worker"
                      className="form-control"
                    >
                      <option>---------------</option>
                      {this.props.worker.data.data &&
                        this.props.worker.data.data.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <Label for="client">Client</Label>
                    <select
                      onChange={this.handleInputChange}
                      id="client"
                      name="client"
                      className="form-control"
                    >
                      <option>---------------</option>
                      {this.props.client.data.data &&
                        this.props.client.data.data.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                    </select>

                    <Label>Checklist </Label>
                    {this.state.mock &&
                      this.state.mock.map(input => {
                        return (
                          <Fragment>
                            <InputGroup key={input}>
                              <Input
                                addon
                                placeholder="Checklist"
                                onBlur={e =>
                                  this.setState({
                                    checklist: [
                                      ...this.state.checklist,
                                      e.target.value
                                    ]
                                  })
                                }
                              />
                              <InputGroupAddon addonType="append">
                                <button
                                  type="button"
                                  onClick={this.ckecklistHandler}
                                  style={{ border: 0, padding: "0 15px" }}
                                >
                                  +
                                </button>
                              </InputGroupAddon>
                            </InputGroup>
                          </Fragment>
                        );
                      })}
                  </FormGroup>
                  <Button color="primary">Save</Button>
                </Form>
              </Col>
            </Row>
          </PerfectScrollbar>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    WorkerCreator: bindActionCreators(WorkerActions, dispatch),
    ClientCreator: bindActionCreators(ClientActions, dispatch),
    ScheduleCreator: bindActionCreators(ScheduleActions, dispatch)
  };
};

const mapStateToProps = state => ({
  worker: state.worker,
  client: state.client
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSchedule);
