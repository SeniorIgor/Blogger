import { combineReducers } from '@reduxjs/toolkit';

import notification from './notification/reducers';
import user from './user/reducers';

const rootReducer = combineReducers({
  user,
  notification,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
