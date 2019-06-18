import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import createReducer from '../reducers';
import {routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

export default function (initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  // if (typeof window === 'object') {
  //   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  // }
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middleWares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));
  sagaMiddleware.run(sagas);

  return store;
}
