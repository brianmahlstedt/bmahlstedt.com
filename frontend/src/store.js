import { createStore, combineReducers } from 'redux';

import { blog } from './reducers';

const reducers = combineReducers({
    blog,
});

const store = createStore(reducers);

export default store;
