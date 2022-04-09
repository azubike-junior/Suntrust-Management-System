import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./Entryfile/Main";
import { store } from "./services/store/store";
import {
  createStore,
  useStateMachine,
  StateMachineProvider,
  GlobalState,
} from "little-state-machine";

ReactDOM.render(
  <Provider store={store}>
    <StateMachineProvider>
      <Main />
    </StateMachineProvider>
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
