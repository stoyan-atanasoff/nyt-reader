import { put, call, takeEvery } from 'redux-saga/effects';
import request from "../utils/request";
import {FETCH_NEWS, NEWS_API_KEY, NEWS_API_URL} from "../constants/newsConstants";
import {fetchNewsFail, fetchNewsSuccess} from "../actions/newsActions";

export function* fetchNews () {
  try {
    const URL = `${NEWS_API_URL}${NEWS_API_KEY}`;
    const query = yield call(request, URL);
    yield put(fetchNewsSuccess(query.results))
  } catch (e) {
    yield put(fetchNewsFail(e));
  }
}

export default function* newsSaga() {
  yield takeEvery(FETCH_NEWS, fetchNews);
}
