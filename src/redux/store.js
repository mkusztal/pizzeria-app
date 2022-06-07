import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';

const subreducers = {
  tables: tablesReducer,
};

const reducer = combineReducers(subreducers);

const middlewares = { thunk };
const middlewareEnhancer = applyMiddleware(...middlewares);
const composeDevTool = composeWithDevTools();

const enhancers = [middlewareEnhancer, composeDevTool];
const composedEnhancers = compose(...enhancers);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
