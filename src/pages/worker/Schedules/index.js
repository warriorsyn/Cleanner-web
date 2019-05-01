import React, { Component, Fragment } from "react";
import { Row, Col, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ScheduleActions from "../../../store/ducks/schedule";
import WorkerNavBar from "../../../components/WorkerNavBar";
import moment from "moment";

import { Container, Button } from "./styles";

class Schedules extends Component {
  componentDidMount() {
    this.props.getWorkersScheduleRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getWorkersScheduleRequest();
    }
  }
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
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.schedule.workerData.data &&
                    this.props.schedule.workerData.data.map(item => (
                      <tr key={item.id}>
                        <td>
                          {item.work}{" "}
                          {item.status !== false ? (
                            <i
                              style={{ color: "green" }}
                              className="fas fa-check-circle"
                            />
                          ) : (
                            ""
                          )}
                        </td>
                        <td>{moment(item.date_time).format("DD/MM/YYYY")}</td>

                        <td>
                          <Button
                            to={`/worker/myschedules/${item.id}/${
                              item.client_id
                            }`}
                            className="btn btn-primary btn-sm"
                          >
                            More
                          </Button>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(ScheduleActions, dispatch);

const mapStateToProps = state => ({
  schedule: state.schedule
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedules);
