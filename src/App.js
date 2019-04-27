import React, { Fragment } from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import Route from "./routes";
import store from "./store";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Route />
        <ReduxToastr closeOnToastrClick progressBar preventDuplicates />
        <GlobalStyles />
      </Fragment>
    </Provider>
  );
}

export default App;
