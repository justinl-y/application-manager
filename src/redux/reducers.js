import { combineReducers } from 'redux';
import authenticationReducer from './modules/authenticationReducer';
// import { routerReducer } from 'react-router-redux';
// other reducers

const combinedReducers = combineReducers({
  userAuthentication: authenticationReducer,
  // router: routerReducer,
});

export default combinedReducers;
