import { loadingResource, doneLoading } from './isLoadingActions';
import roleApi from '../../services/api/role';

export const LOAD_ROLE = 'LOAD_ROLE';
export const UNLOAD_ROLE = 'UNLOAD_ROLE';
export const ADD_ROLE = 'ADD_ROLE';
export const EDIT_ROLE = 'EDIT_ROLE';
export const REMOVE_ROLE = 'REMOVE_ROLE';

export const loadRole = data => ({
  type: LOAD_ROLE,
  payload: data,
});

export const unloadRole = () => ({
  type: UNLOAD_ROLE,
  payload: null,
});

export const addRole = () => ({
  type: ADD_ROLE,
  payload: null,
});

export const editRole = id => ({
  type: EDIT_ROLE,
  payload: id,
});

export const removeRole = id => ({
  type: REMOVE_ROLE,
  payload: id,
});

export const fetchRole = data => (dispatch) => {
  dispatch(loadingResource());
  roleApi.get(data)
      .then((result) => {
        dispatch(loadRole(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const insertRole = data => (dispatch) => {
  // dispatch(loadingResource());
  roleApi.add(data)
      .then((result) => {
        dispatch(addRole(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const updateRole = data => (dispatch) => {
  // dispatch(loadingResource());
  roleApi.edit(data)
      .then((result) => {
        dispatch(editRole(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const deleteRole = data => (dispatch) => {
  // dispatch(loadingResource());
  roleApi.delete(data)
      .then((result) => {
        dispatch(removeRole(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};
