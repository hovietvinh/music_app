import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import TopicReducer from './reducers/TopicReducers';
import SongReducer from './reducers/SongReducers';
import UserReducer from './reducers/UserReducers';
import AccountReducer from './admin/reducers/AccountReducers';
import SongReducerAdmin from './admin/reducers/SongReducers';


const rootReducer = combineReducers({
    TopicReducer,
    SongReducer,
    UserReducer,
    AccountReducer,
    SongReducerAdmin
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
