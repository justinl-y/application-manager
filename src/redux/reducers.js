import { combineReducers } from 'redux';
import isLoadingReducer from './modules/isLoadingReducer';
import authenticationReducer from './modules/authenticationReducer';
import rolesListReducer from './modules/rolesListReducer';
import roleReducer from './modules/roleReducer';
import roleTypeReducer from './modules/roleTypeReducer';
import locationReducer from './modules/locationReducer';

const combinedReducers = combineReducers({
  isLoading: isLoadingReducer,
  userAuthentication: authenticationReducer,
  rolesList: rolesListReducer,
  role: roleReducer,
  roleTypes: roleTypeReducer,
  locations: locationReducer,
});

export default combinedReducers;
