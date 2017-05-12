import userApi from '../../services/firebase/user';
import { setUserSignOut } from '../modules/authenticationActions';

export const SET_USER_PROFILE = 'SET_USER_PROFILE';
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

export const removeProfile = () => ({
  type: REMOVE_USER_PROFILE,
  payload: null,
});

export const updateProfile = data => (dispatch) => {
  // dispatch(loadingResource());
  userApi.edit(data)
      .then((result) => {
        dispatch(editProfile(result));
        // dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const deleteProfile = () => (dispatch) => {
  userApi.delete()
      .then(() => {
        dispatch(removeProfile());
        dispatch(setUserSignOut());
      })
      .catch(error => console.log(error));
};
