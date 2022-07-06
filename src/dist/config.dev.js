"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = void 0;
var API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3131/api';
exports.API_URL = API_URL;