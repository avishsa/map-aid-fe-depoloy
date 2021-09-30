import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { reports } from './reports.reducer';
import {slider} from "./slider.reducer";

const rootReducer = combineReducers({
    authentication,
    reports,
    slider
    
});

export default rootReducer;