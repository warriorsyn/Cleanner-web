import React, { Component, Fragment } from "react";
import { Table, Row, Col } from "reactstrap";
import NavBar from "../../../../components/NavBar";
import { Container, Button } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClientActions from "../../../../store/ducks/client";

class ChooseClient extends Component {
  componentDidMount() {
    this.props.getClientRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.client.data.data !== this.props.client.data.data) {
      this.props.getClientRequest();
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
                  {this.props.client.data.data &&
                    this.props.client.data.data.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>

                        <td>
                          <Button
                            to={`/client/report/${item.id}`}
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
  client: state.client
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ClientActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseClient);
