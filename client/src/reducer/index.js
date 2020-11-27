import { combineReducers } from "redux";
import user from "./user";
import team from "./team";
import dashboard from "./dashboard"
import {reducer  as formReducer} from "redux-form";

const allReducers = combineReducers({
    user,
    team,
    dashboard,
    form: formReducer
});

export default allReducers;

