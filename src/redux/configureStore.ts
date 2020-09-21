import { createStore } from 'redux';
import rootReducer from './ducks/reducers';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
