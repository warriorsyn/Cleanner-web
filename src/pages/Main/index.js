import React from "react";
import { Row, Col } from "reactstrap";
import NavBar from "../../components/NavBar";

import { Options, Container } from "./styles";

const Main = () => (
  <div>
    <NavBar />
    <Container>
      <Row>
        <Col sm="12">
          <Options to="/main">
            <span>Worker Hours report</span>

            <div>
              <i class="fas fa-arrow-right" />
            </div>
          </Options>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <Options to="/main">
            <span>Client Hour Report</span>

            <div>
              <i class="fas fa-arrow-right" />
            </div>
          </Options>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <Options to="/main">
            <span>Product</span>

            <div>
              <i class="fas fa-arrow-right" />
            </div>
          </Options>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Main;
