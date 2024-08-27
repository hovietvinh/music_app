import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import TopicReducer from './reducers/TopicReducers';

const rootReducer = combineReducers({
    TopicReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
