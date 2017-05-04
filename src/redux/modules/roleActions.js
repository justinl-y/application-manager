import { loadingResource, doneLoading } from './isLoadingActions';
import roleApi from '../../services/api/role';

export const LOAD_ROLES = 'LOAD_ROLES';
export const LOAD_ROLE = 'LOAD_ROLE';
export const ADD_ROLE = 'ADD_ROLE';
export const EDIT_ROLE = 'EDIT_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';

export const loadRoles = () => ({
  type: LOAD_ROLES,
  payload: null,
});

export const loadRole = id => ({
  type: LOAD_ROLE,
  payload: id,
});

export const addRole = data => ({
  type: ADD_ROLE,
  payload: data,
});

export const editRole = data => ({
  type: EDIT_ROLE,
  payload: data,
});

export const deleteRole = id => ({
  type: DELETE_ROLE,
  payload: id,
});

export const fetchRoles = () => (dispatch) => {
  dispatch(loadingResource());
  roleApi.getAll()
      .then((result) => {
        dispatch(loadRoles(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const fetchRole = id => (dispatch) => {
  dispatch(loadingResource());
  roleApi.getOne(id)
      .then((result) => {
        dispatch(loadRole(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const insertRole = role => (dispatch) => {
  // dispatch(loadingResource());
  roleApi.add(role)
      .then((result) => {
        dispatch(addRole(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const updateRole = role => (dispatch) => {
  // dispatch(loadingResource());
  roleApi.edit(role)
      .then((result) => {
        dispatch(editRole(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const insertRoleType = data => (dispatch) => {
  roleApi.add(data)
      .then((result) => {
        dispatch(addRole(result));
      })
      .catch(error => console.log(error));
};
