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

createStore(
  {
    data: {
      exceptionalAchievement: "",
      selectedBehavioralTrainings: [],
      selectedTechnicalTrainings: [],
      appraisalRates: {},
      appraisalResults: {},
      appraiseeTimeManagementScore: "",
      appraiseePunctualityScore: "",
      appraiseeCommunicationScore: "",
      appraiseeProfessionalConductScore: "",
      appraiseeAnalyticalThinkingScore: "",
      appraiseeBehaviourArray: [],
      appraiseeFunctionalArray: [],
      appraiseeBehaviouralTrainings: "",
      appraiseeFunctionalTrainings: "",
      totalAppraisalResult: "",
      appraiseeResults: {},
      appraiseeRates: {},
      values: {},
      rateResult: "",
      strengthResult: "",
    },
  },
  {}
);

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
