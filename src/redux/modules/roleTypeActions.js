import { loadingResource, doneLoading } from './isLoadingActions';
import roleTypeApi from '../../services/api/role-type';

export const LOAD_ROLE_TYPES = 'LOAD_ROLE_TYPES';
export const ADD_ROLE_TYPE = 'ADD_ROLE_TYPE';

export const loadRoleTypes = data => ({
  type: LOAD_ROLE_TYPES,
  payload: data,
});

export const addRoleType = data => ({
  type: ADD_ROLE_TYPE,
  payload: data,
});

export const fetchRoleTypes = () => (dispatch) => {
  dispatch(loadingResource());
  roleTypeApi.get()
      .then((result) => {
        dispatch(loadRoleTypes(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const insertRoleType = data => (dispatch) => {
  roleTypeApi.add(data)
      .then((result) => {
        dispatch(addRoleType(result));
      })
      .catch(error => console.log(error));
};
