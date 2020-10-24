import { combineReducers } from "redux";
import User from "./user";
import {reducer  as formReducer} from "redux-form";

const allReducers = combineReducers({
    User,
    form: formReducer
});

export default allReducers;

