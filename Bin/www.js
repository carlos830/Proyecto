const http = require('http');
const app = require('../app');
var debug = require('debug')('proyecto:server');
//var models = require("../models");

const port = parseInt(process.env.port,10) || 8090;
app.set('port',port);

const server = http.createServer(app);
server.listen(port);