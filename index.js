console.log('hello world')

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', ()=> {
  console.log('yumo')  
})

eventEmitter.emit('lunch');