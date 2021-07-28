import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import reportsReducer from "./reportsReducer";

export default combineReducers({    
    form: formReducer,
    reports: reportsReducer
});