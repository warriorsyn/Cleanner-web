import React, { Component, Fragment } from "react";
import { Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ClientActions from "../../../store/ducks/client";
import swal from "sweetalert";
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

  handlerClick = async id => {
    const alerts = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    });

    if (!alerts) return;
    //delete client
    this.props.deleteClientRequest(id);
  };

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
                    <th>Telephone</th>
                    <th />
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

                        <td>{item.telephone}</td>
                        <td>
                          <Button className="btn btn-primary btn-sm">
                            Update
                          </Button>
                        </td>

                        <td>
                          <button
                            onClick={() => this.handlerClick(item.id)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
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
