import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const middlewares = [thunkMiddleware];

const createLogger = require('redux-logger');
const logger = createLogger();
middlewares.push(logger);
middlewares.push(reduxImmutableStateInvariant());

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
}
