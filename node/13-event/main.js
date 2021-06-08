const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', console.log);

emitter.log(() => {
  console.log('.... doing something!');
});
