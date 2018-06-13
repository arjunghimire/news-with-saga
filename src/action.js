import { watcherSaga } from "./sagas";

export function onRequestDog() {
	return dispatch => {
      watcherSaga: () => dispatch({ type: "API_CALL_REQUEST" })
  };
}