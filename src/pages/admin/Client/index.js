import React, { Component, Fragment } from "react";
import { Col, Row, Container, Table } from "reactstrap";

import NavBar from "../../../components/NavBar";
// import { Container } from './styles';

export default class Client extends Component {
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
                  <tr>
                    <td>Mark</td>
                    <td>Av I dont know</td>

                    <td>
                      <button className="btn btn-primary btn-sm">More</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
