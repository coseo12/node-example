const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = args => {
  console.log('first callback - ', args);
};

emitter.on('test', callback1);

emitter.on('test', args => {
  console.log('second callback - ', args);
});

emitter.emit('test', { message: 1 });
emitter.emit('test', { message: 2 });
emitter.removeListener('test', callback1);
emitter.emit('test', { message: 3 });
