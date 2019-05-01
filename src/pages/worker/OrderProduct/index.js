import React, { Component, Fragment } from "react";
import { Row, Col, FormGroup, Button } from "reactstrap";
import { Container, Form } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductActions from "../../../store/ducks/product";

import WorkerNavBar from "../../../components/WorkerNavBar";
class OrderProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    // console.log("id", id, "clientid", clientId);

    this.props.createOrderRequest(id, 1);
  };

  componentDidMount() {
    this.props.getProductByIdRequest(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <WorkerNavBar />
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                {this.props.product.single.data && (
                  <div>
                    <span>Work: {this.props.product.single.data.name}</span>
                    <span>
                      Quantity: {this.props.product.single.data.quantity}{" "}
                    </span>
                  </div>
                )}
                <br />
                <FormGroup />
                <Button>Take</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderProduct);
