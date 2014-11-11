# application.mixin.emitter
[![NPM version](https://badge.fury.io/js/application.mixin.emitter.svg)](http://badge.fury.io/js/application.mixin.emitter)
[![dependencies](https://david-dm.org/luscus/application.mixin.emitter.svg)](https://david-dm.org/luscus/application.mixin.emitter)
[![devDependency Status](https://david-dm.org/luscus/application.mixin.emitter/dev-status.svg?theme=shields.io)](https://david-dm.org/luscus/application.mixin.emitter#info=devDependencies)

[Application Framework](https://github.com/luscus/application.skeleton) Mixin: adds eventing to the application.


## Added Properties and Methods

### Property "emitter"

Holds an instance of Node's [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### Method "on"

Reference the [EventEmitter's "on"](http://nodejs.org/api/events.html#events_emitter_on_event_listener) method.

### Method "emit"

Reference the [EventEmitter's "emit"](http://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2) method.


## Usage

Your application project has to build upon the [application.skeleton](https://github.com/luscus/application.skeleton) and you only have to set the new dependency:

    npm install application.mixin.emitter --save

The `application.skeleton` will do all the work adding the Mixins as this one.

Simply use the new functionality:

    {
      emitter: <new EventEmitter()>,
      emit: <this.emitter.emit>,
      on: <this.emitter.on>
    }

--------------
Copyright (c) 2014 Luscus (luscus.redbeard@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
