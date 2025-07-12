import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./authReducer";
import { setUserData } from "./authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const authData = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.github.com/users/Vedant2802");
    const data = await response.json();
    console.log(data);
    dispatch(setUserData(data));
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

// In Redux:
// A thunk is a function returned by an action creator, which executes async logic.

export default store;
