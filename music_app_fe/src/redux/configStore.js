import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import TopicReducer from './reducers/TopicReducers';
import SongReducer from './reducers/SongReducers';


const rootReducer = combineReducers({
    TopicReducer,
    SongReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
