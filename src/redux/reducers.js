import { combineReducers } from 'redux';
import isLoadingReducer from './modules/isLoadingReducer';
import authenticationReducer from './modules/authenticationReducer';
import profileReducer from './modules/profileReducer';
import rolesListReducer from './modules/rolesListReducer';
import roleReducer from './modules/roleReducer';
import roleTypeReducer from './modules/roleTypeReducer';
import locationReducer from './modules/locationReducer';

const combinedReducers = combineReducers({
  isLoading: isLoadingReducer,
  user: combineReducers({
    authentication: authenticationReducer,
    profile: profileReducer,
  }),
  rolesList: rolesListReducer,
  role: roleReducer,
  roleTypes: roleTypeReducer,
  locations: locationReducer,
});

export default combinedReducers;
