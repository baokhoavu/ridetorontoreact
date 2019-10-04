import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import stateOfMind from '../reducers/index';

const store = createStore(stateOfMind, applyMiddleware(thunk));

export default store;