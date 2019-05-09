import React, { Component, Fragment } from "react";
import { Row, Col, Button } from "reactstrap";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import AuthActions from "../../store/ducks/auth";

import { Options, Container } from "./styles";
class Main extends Component {
  handlerClick = () => this.props.signOut();
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col sm="12">
              <Options to="/client">
                <span>Client</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <Options to="/schedule">
                <span>Schedule</span>
                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <Options to="/worker">
                <span>Worker</span>
                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>

          {/* <Row>
            <Col sm="12">
              <Options to="/worker/report">
                <span>Worker Hours report</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <Options to="/client/report">
                <span>Client Hour Report</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row> */}

          <Row>
            <Col>
              <Options to="/report">
                <span>Report</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <Options last to="/product">
                <span>Product</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>

              <Button onClick={this.handlerClick} color="danger">
                LOG OUT
              </Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Main);
