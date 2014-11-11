var should = require('chai').should(),
    mixin = require('../lib/application.mixin.emitter');


describe('Applying application.mixin.emitter mixin:', function(){
  var application = {
    id: 'myApp',
    alias: 'oldApp',
    config: {
      version: '0.0.1'
    }
  };

  mixin.apply(application);

  it('application is an Object', function(){
    application.should.be.a('object');
  });

  it('application has a method "on"', function(){
    application.should.have.property('on');
    application.on.should.be.a('function');
  });

  it('application has a method "emit"', function(){
    application.should.have.property('on');
    application.on.should.be.a('function');
  });

  it('application can react on events', function(done){
    application.on('test', function onTestEvent (status) {
      status.should.equal(true);
      done();
    });

    application.emit('test', true);
  });
});
