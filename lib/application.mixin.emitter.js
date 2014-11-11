var EventEmitter = require('events').EventEmitter;


exports.apply = function apply (_app) {

  // check if the emitter has already be set
  if (!_app.emitter) {

    // emitter is not defined,
    // setting the emitter
    _app.emitter = new EventEmitter();
    _app.emit    = _app.emitter.emit;
    _app.on      = _app.emitter.on;
  }
};
