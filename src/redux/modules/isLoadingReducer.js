import { LOADING_RESOURCE, DONE_LOADING } from './isLoadingActions';

const initialState = false;

const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RESOURCE:
      return true;
    case DONE_LOADING:
      return false;
    default:
      return state;
  }
};

export default isLoadingReducer;
