var EventEmitter = require('events').EventEmitter;


exports.apply = function apply (_app) {

  _app.emitter = new EventEmitter();
  _app.emit    = _app.emitter.emit;
  _app.on      = _app.emitter.on;
};
