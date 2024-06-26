import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import jobsReducer from "./reducers/jobReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
