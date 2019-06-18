import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import newsReducer from './newsReducer';
import { createBrowserHistory } from 'history';

export default function createReducer(injectedReducers = {}) {
  const history = createBrowserHistory();
  return  combineReducers({
    router: connectRouter(history),
    news: newsReducer,
    ...injectedReducers,
  });
}
