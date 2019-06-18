/**
 * Tests for HomePage sagas
 */

import { put, takeEvery } from 'redux-saga/effects';
import newsSaga, { fetchNews } from '../newsSaga';
import {fetchNewsFail, fetchNewsSuccess} from "../../actions/newsActions";
import {FETCH_NEWS} from "../../constants/newsConstants";

describe('fetch news saga', () => {
  let fetchNewsGenerator;

  beforeEach(() => {
    fetchNewsGenerator = fetchNews();

    const callDescriptor = fetchNewsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should call the fetchNewsSuccess action ', () => {
    const putDescriptor = fetchNewsGenerator.next({ results: ['test successful result'] }).value;
    expect(putDescriptor).toEqual(put(fetchNewsSuccess(['test successful result'])));
  });

  it('should call the fetchNewsFail action if the request failed', () => {
    const response = new Error('Some error');
    const putDescriptor = fetchNewsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(fetchNewsFail(response)));
  });

});

describe('news saga', () => {
  const saga = newsSaga();

  it('should start task to watch for FETCH_NEWS invokes', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(FETCH_NEWS, fetchNews));
  });
});
