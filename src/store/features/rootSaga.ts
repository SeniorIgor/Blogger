import { all, spawn } from 'redux-saga/effects';

import notificationSaga from './notification/sagas';
import userSaga from './user/sagas';

function* rootSaga() {
  const sagas = [userSaga, notificationSaga];

  yield all(sagas.map((s) => spawn(s)));
}

export default rootSaga;
