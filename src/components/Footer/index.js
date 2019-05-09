import React, { Component, Fragment } from "react";

import { Footer } from "./styles";

export default class MobileFooter extends Component {
  render() {
    return (
      <Fragment>
        <Footer className="footer">
          <i class="fas fa-home" />
        </Footer>
      </Fragment>
    );
  }
}
