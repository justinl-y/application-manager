import { loadingResource, doneLoading } from './isLoadingActions';
import rolesListApi from '../../services/api/roles-list';

export const LOAD_ROLES = 'LOAD_ROLES';

export const loadRoles = data => ({
  type: LOAD_ROLES,
  payload: data,
});

export const fetchRoles = () => (dispatch) => {
  dispatch(loadingResource());
  rolesListApi.get()
      .then((result) => {
        dispatch(loadRoles(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};
