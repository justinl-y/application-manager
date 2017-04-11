import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers';

const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
