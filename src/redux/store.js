import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';

const subreducers = {
  tables: tablesReducer,
};

const reducer = combineReducers(subreducers);

const middleware = { thunk };
const middlewareEnhancer = applyMiddleware(...middleware);
const composeDevTool = composeWithDevTools();

const enhancers = [middlewareEnhancer, composeDevTool];
const composedEnhancers = compose(...enhancers);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
