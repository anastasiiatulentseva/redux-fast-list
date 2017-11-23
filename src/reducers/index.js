import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import items from './itemReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  items
});

export default rootReducer;
