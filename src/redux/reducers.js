import { combineReducers } from 'redux';
import messageReducer from './modules/messageReducer';
import isLoadingReducer from './modules/isLoadingReducer';
import authenticationReducer from './modules/authenticationReducer';
import roleTypesReducer from './modules/roleTypesReducer';

const combinedReducers = combineReducers({
  message: messageReducer,
  isLoading: isLoadingReducer,
  userAuthentication: authenticationReducer,
  roleTypes: roleTypesReducer,
});

export default combinedReducers;
