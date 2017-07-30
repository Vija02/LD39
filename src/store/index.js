import { createStore } from 'redux';
// import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers';

// export const history = createHistory();
// const routeMiddleWare = routerMiddleware(history);

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
  );
  return store;
}
