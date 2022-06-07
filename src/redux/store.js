import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';

const subreducers = {
  tables: tablesReducer,
};

const reducer = combineReducers(subreducers);

const middleware = thunk;
// const middlewareEnhancer = applyMiddleware(...middlewares);
// const composeDevTool = composeWithDevTools();

// const enhancers = [middlewareEnhancer, composeDevTool];
// const composedEnhancers = compose(...enhancers);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
