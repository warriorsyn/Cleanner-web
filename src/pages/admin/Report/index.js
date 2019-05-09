import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";

import Footer from "../../../components/Footer";

import { Container, Options } from "./styles";

export default class Report extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Link to="/home">Back</Link>
          <Row>
            <Col sm="12">
              <Options last to="/client/report">
                <span>Client Report</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Options to="/worker/report">
                <span>Worker Report</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}
