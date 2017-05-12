// import { loadingResource, doneLoading } from './isLoadingActions';
import profileApi from '../../services/api/user-detail';

export const SET_USER_PROFILE = 'SET_USER_PROFILE';
// export const UNLOAD_PROFILE = 'UNLOAD_PROFILE';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const REMOVE_USER_PROFILE = 'REMOVE_USER_PROFILE';

export const setUserProfile = data => ({
  type: SET_USER_PROFILE,
  payload: data,
});

export const editProfile = id => ({
  type: EDIT_USER_PROFILE,
  payload: id,
});

export const removeProfile = id => ({
  type: REMOVE_USER_PROFILE,
  payload: id,
});

/* export const fetchProfile = data => (dispatch) => {
  dispatch(loadingResource());
  profileApi.get(data)
      .then((result) => {
        dispatch(loadProfile(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};*/

export const updateProfile = data => (dispatch) => {
  // dispatch(loadingResource());
  profileApi.edit(data)
      .then((result) => {
        dispatch(editProfile(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const deleteProfile = data => (dispatch) => {
  // dispatch(loadingResource());
  profileApi.delete(data)
      .then((result) => {
        dispatch(removeProfile(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};
