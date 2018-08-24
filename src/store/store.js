import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


export default createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, promise()));