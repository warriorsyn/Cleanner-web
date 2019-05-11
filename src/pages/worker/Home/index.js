import React, { Component, Fragment } from "react";
import { Col, Row, Button } from "reactstrap";
import Footer from "../../../components/Footer";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import AuthActions from "../../../store/ducks/auth";

import { Container, Options } from "./styles";
import WorkerNavBar from "../../../components/WorkerNavBar";
class Home extends Component {
  handlerClick = () => this.props.signOut();
  render() {
    return (
      <Fragment>
        <WorkerNavBar />

        <Container>
          <Row>
            <Col sm="12">
              <Options to="/worker/myschedules">
                <span>Schedule</span>

                <div>
                  <i className="fas fa-arrow-right" />
                </div>
              </Options>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Options last to="/worker/products">
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
)(Home);
