import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClientActions from "../../../store/ducks/client";

import NavBar from "../../../components/NavBar";
import { Container, Button } from "./styles";

class Client extends Component {
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
                    <th>Address</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.client.data.data &&
                    this.props.client.data.data.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>
                          <i
                            style={{ marginRight: 5 }}
                            className="fas fa-map-marker-alt"
                          />
                          {item.address}
                        </td>

                        <td>
                          {/* <button className="btn btn-primary btn-sm">
                            More
                          </button> */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Button className="btn btn-primary" to="/client/new">
            add
          </Button>
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
)(Client);
