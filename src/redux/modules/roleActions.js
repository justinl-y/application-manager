import { loadingResource, doneLoading } from './isLoadingActions';
import roleApi from '../../services/api/role';

export const LOAD_ROLE = 'LOAD_ROLE';
export const ADD_ROLE = 'ADD_ROLE';
export const EDIT_ROLE = 'EDIT_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';

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

export const fetchRole = id => (dispatch) => {
  dispatch(loadingResource());
  roleApi.get(id)
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
