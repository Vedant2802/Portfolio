// authReducer.js
import { actions } from "./authActions";

const initialState = {
  auth: {},
  main: {},
};

export const authReducer = (state = initialState, action) => {
  console.log("Action in reducer:", action);
  switch (action.type) {
    case actions.SET_USER_DATA:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};
