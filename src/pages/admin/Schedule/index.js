import React, { Component, Fragment } from "react";
import { Row, Col, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ScheduleActions from "../../../store/ducks/schedule";

import moment from "moment";

import NavBar from "../../../components/NavBar";
import { Container, Button } from "./styles";

class Schedule extends Component {
  componentDidMount() {
    this.props.getScheduleRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getScheduleRequest();
    }
  }
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>

                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.schedule.data.data &&
                    this.props.schedule.data.data.map(item => (
                      <tr key={item.id}>
                        <td>
                          {item.work}{" "}
                          {item.status ? (
                            <i
                              style={{ color: "green " }}
                              className="fas fa-check-circle"
                            />
                          ) : (
                            <i
                              style={{ color: "#a9a91a" }}
                              className="fas fa-hourglass-end"
                            />
                          )}
                        </td>
                        <td>{item.address}</td>
                        <td>{moment(item.date_time).format("DD/MM/YYYY")}</td>

                        <td>
                          <Button
                            to={`/unique/schedule/${item.id}`}
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
          <Button className="btn btn-primary" to="/schedule/new">
            Add
          </Button>
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
)(Schedule);
