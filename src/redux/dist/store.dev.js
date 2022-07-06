"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _initialState = _interopRequireDefault(require("./initialState"));

var _tablesRedux = _interopRequireDefault(require("./tablesRedux"));

var _statusReducer = _interopRequireDefault(require("./statusReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var subreducers = {
  tables: _tablesRedux["default"],
  status: _statusReducer["default"]
};
var reducer = (0, _redux.combineReducers)(subreducers);
var store = (0, _redux.createStore)(reducer, _initialState["default"], (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk["default"]), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
  return f;
}));
var _default = store;
exports["default"] = _default;