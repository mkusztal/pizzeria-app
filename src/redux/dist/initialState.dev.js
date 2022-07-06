"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  tables: [{
    id: '1',
    status: 'Busy',
    peopleAmount: '2',
    maxPeopleAmount: '4',
    bill: '20'
  }, {
    id: '2',
    status: 'Free',
    peopleAmount: 0,
    maxPeopleAmount: 3,
    bill: 0
  }, {
    id: '3',
    status: 'Busy',
    peopleAmount: 2,
    maxPeopleAmount: 3,
    bill: 45
  }, {
    id: '4',
    status: 'Cleaning',
    peopleAmount: 0,
    maxPeopleAmount: 3,
    bill: 0
  }],
  status: ['Busy', 'Free']
};
var _default = initialState;
exports["default"] = _default;