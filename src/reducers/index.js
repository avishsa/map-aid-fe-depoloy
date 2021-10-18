import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { reports } from './reports.reducer';
import {createReport} from "./createReport.reducer";
import {followup} from "./followup.reducer";
import {slider} from "./slider.reducer";

const rootReducer = combineReducers({
    authentication,
    reports,
    createReport,    
    slider,
    followup,
    
});

export default rootReducer;