import { all, fork } from 'redux-saga/effects';
import news from './newsSaga';

const sagas = [ news ];

export default function *rootSaga () {
  yield all(sagas.map(saga => fork(saga)));
}
