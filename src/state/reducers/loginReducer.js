import { FETCHCARD, LOGIN_FAIL, LOGIN_SUCCESS } from "../Constants";

const init = {
  cards: {},
};
export const CardReducer = (state = init, action) => {
  console.log("state", state);
  switch (action.type) {
    case FETCHCARD:
      console.log("action", action);
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};
export const loginReducer = (state = { result: {} }, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        result: {},
      };

    default:
      return state;
  }
};
