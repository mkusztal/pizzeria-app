"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchStatus = exports.updateStatus = exports.getAllStatuses = void 0;

var _config = require("../config.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// selectors
var getAllStatuses = function getAllStatuses(_ref) {
  var status = _ref.status;
  return status;
}; // actions


exports.getAllStatuses = getAllStatuses;

var createActionName = function createActionName(actionName) {
  return "app/status/".concat(actionName);
};

var UPDATE_STATUS = createActionName("UPDATE_STATUS"); // action creators

var updateStatus = function updateStatus(payload) {
  return {
    type: UPDATE_STATUS,
    payload: payload
  };
};

exports.updateStatus = updateStatus;

var fetchStatus = function fetchStatus() {
  return function (dispatch) {
    fetch(_config.API_URL + '/status').then(function (res) {
      return res.json();
    }).then(function (status) {
      return dispatch(updateStatus(status));
    });
  };
};

exports.fetchStatus = fetchStatus;

var tableStatusReducer = function tableStatusReducer() {
  var statePart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_STATUS:
      return _toConsumableArray(action.payload);

    default:
      return statePart;
  }
};

var _default = tableStatusReducer;
exports["default"] = _default;