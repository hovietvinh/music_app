import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import TopicReducer from './reducers/TopicReducers';
import SongReducer from './reducers/SongReducers';
import UserReducer from './reducers/UserReducers';


const rootReducer = combineReducers({
    TopicReducer,
    SongReducer,
    UserReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
