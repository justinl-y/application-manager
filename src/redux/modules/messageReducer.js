import {
  ADD_MESSAGE,
  CLEAR_MESSAGE,
} from './messageActions';

const initialState = {
  message: {},
};

// reducer
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const message = {};

      message.text = action.payload.message;
      message.active = true;

      return { ...state, message };
    }
    case CLEAR_MESSAGE: {
      const messageActive = { active: false };

      return { ...state, message: { ...state.message, ...messageActive } };
    }
    default:
      return state;
  }
};

export default messageReducer;
