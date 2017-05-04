import { combineReducers } from 'redux';
import isLoadingReducer from './modules/isLoadingReducer';
import authenticationReducer from './modules/authenticationReducer';
import rolesListReducer from './modules/rolesListReducer';
import roleReducer from './modules/roleReducer';
import roleTypesReducer from './modules/roleTypesReducer';

const combinedReducers = combineReducers({
  isLoading: isLoadingReducer,
  userAuthentication: authenticationReducer,
  rolesList: rolesListReducer,
  role: roleReducer,
  roleTypes: roleTypesReducer,
});

export default combinedReducers;
