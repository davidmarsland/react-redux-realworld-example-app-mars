import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'conduit',
  articles: null
};

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
  }
  return state;
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware);

export default store;