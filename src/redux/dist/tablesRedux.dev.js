"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateTableRequest = exports.fetchTables = exports.editTable = exports.updateTables = exports.getTableById = exports.getTables = void 0;

var _config = require("../config");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//selectors
var getTables = function getTables(_ref) {
  var tables = _ref.tables;
  return tables;
};

exports.getTables = getTables;

var getTableById = function getTableById(_ref2, tableId) {
  var tables = _ref2.tables;
  return tables.find(function (table) {
    return table.id === tableId;
  });
}; // actions


exports.getTableById = getTableById;

var createActionName = function createActionName(actionName) {
  return "app/tables/".concat(actionName);
};

var UPDATE_TABLES = createActionName('UPDATE_TABLES');
var EDIT_TABLE = createActionName('EDIT_TABLE'); // action creators

var updateTables = function updateTables(payload) {
  return {
    type: UPDATE_TABLES,
    payload: payload
  };
};

exports.updateTables = updateTables;

var editTable = function editTable(payload) {
  return {
    type: EDIT_TABLE,
    payload: payload
  };
};

exports.editTable = editTable;

var fetchTables = function fetchTables() {
  return function (dispatch) {
    fetch(_config.API_URL + '/tables/').then(function (res) {
      return res.json();
    }).then(function (tables) {
      return dispatch(updateTables(tables));
    });
  };
};

exports.fetchTables = fetchTables;

var updateTableRequest = function updateTableRequest(updatedTable) {
  return function (dispatch) {
    var options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTable)
    };
    fetch(_config.API_URL + '/tables/' + updatedTable.id, options).then(function () {
      return dispatch(editTable(updatedTable));
    });
  };
};

exports.updateTableRequest = updateTableRequest;

var tablesReducer = function tablesReducer() {
  var statePart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_TABLES:
      return _toConsumableArray(action.payload);

    default:
      return statePart;
  }
};

var _default = tablesReducer;
exports["default"] = _default;