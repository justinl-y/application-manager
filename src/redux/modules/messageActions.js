export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const addMessage = data => ({
  type: ADD_MESSAGE,
  payload: data,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
  payload: null,
});
