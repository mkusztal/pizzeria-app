"use strict";

/* global require, process */
var jsonServer = require('json-server');

var server = jsonServer.create();
var router = jsonServer.router('build/db/app.json');
var middlewares = jsonServer.defaults({
  "static": 'build',
  noCors: true
});
var port = process.env.PORT || 3131;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/tables/api/*': '/$1'
}));
server.use(router);
server.listen(port);