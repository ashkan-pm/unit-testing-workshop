import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  user
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
