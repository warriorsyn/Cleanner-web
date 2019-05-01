import React, { Component, Fragment } from "react";
import { Table, Row, Col } from "reactstrap";
import NavBar from "../../../../components/NavBar";
import { Container, Button } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WorkerActions from "../../../../store/ducks/worker";

class ChooseWorker extends Component {
  componentDidMount() {
    this.props.getWorkerRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.worker.data.data !== this.props.worker.data.data) {
      this.props.getWorkerRequest();
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

                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.worker.data.data &&
                    this.props.worker.data.data.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>

                        <td>
                          <Button
                            to={`/worker/report/${item.id}`}
                            className="btn btn-primary btn-sm"
                          >
                            Report
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

const mapStateToProps = state => ({
  worker: state.worker
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(WorkerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseWorker);
