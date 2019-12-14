import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import peopleReducer from "./people/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  people: peopleReducer,
  form: formReducer
});

export default rootReducer;
