import { loadingResource, doneLoading } from './isLoadingActions';
import locationApi from '../../services/api/location';

export const LOAD_LOCATIONS = 'LOAD_LOCATIONS';
export const ADD_LOCATION = 'ADD_LOCATION';

export const loadLocations = data => ({
  type: LOAD_LOCATIONS,
  payload: data,
});

export const addLocation = data => ({
  type: ADD_LOCATION,
  payload: data,
});

export const fetchLocations = () => (dispatch) => {
  dispatch(loadingResource());
  locationApi.get()
      .then((result) => {
        dispatch(loadLocations(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};

export const insertLocation = data => (dispatch) => {
  locationApi.add(data)
      .then((result) => {
        dispatch(addLocation(result));
      })
      .catch(error => console.log(error));
};
