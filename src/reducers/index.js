import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { reports } from './reports.reducer';


const rootReducer = combineReducers({
    authentication,
    reports
    
});

export default rootReducer;