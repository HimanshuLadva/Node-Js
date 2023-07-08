import { EventEmitter } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

console.log("Script is running");
myEmitter.emit('event');
console.log("Script is still running");

myEmitter.on('error', () => {
    console.log("There is an error");
})
myEmitter.emit('error');

const ee1 = new EventEmitter({ captureRejections: true });

ee1.on('something', async (value) => {
   console.log("Error occured in promise");
});

ee1.emit('something');

//Event: 'newListener'
myEmitter.once('newListener',(event, listener) => {
    if(event == 'event2') {
        myEmitter.on('event2', () => {
            console.log('B');
        })
    }
});

myEmitter.on('event2', () => {
    console.log('A');
})

myEmitter.on('event2', () => {
   console.log('C');
});

myEmitter.emit('event2');
