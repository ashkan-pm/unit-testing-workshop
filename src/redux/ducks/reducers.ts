import { combineReducers } from 'redux';
import login from './login';

const rootReducer = combineReducers({
  login
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
