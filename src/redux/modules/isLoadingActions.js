export const LOADING_RESOURCE = 'LOADING_RESOURCE';
export const DONE_LOADING = 'DONE_LOADING';

export const loadingResource = () => ({
  type: LOADING_RESOURCE,
  payload: null,
});

export const doneLoading = () => ({
  type: DONE_LOADING,
  payload: null,
});
