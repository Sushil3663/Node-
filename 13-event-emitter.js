//Event Driven programming
// Event-driven programming, or event-oriented programming, is a paradigm where entities (objects, services, and so on) communicate indirectly by sending messages to one another through an intermediary. The messages are typically stored in a queue before being handled by the consumers.
//Component 
// Event Object.
// Event Source.
// Event Listener.

//Event-driven programming is a programming paradigm in which program execution is determined by new user events (mouse clicks, keypresses),
//Event Module
//Node js has built in module called 'events' where you can create-,fire- and listen for- your own event.

//Example 1- Registering for the event to be fired only one time using once.
// Example 2 - Create an event emitter instance and register a ccouple of callbacks
//Example 3- Register for the events with callback parameters.

// .emit is used to trigger an event · on is used to add a callback function that's going to be executed when the event is triggered.

// const EventEmitter = require('events')

// const event = new EventEmitter();
// event.emit('getName');

// event.on('getName',()=>{
//     console.log('Your Name is Sushil')
// });


// const EventEmitter = require('events');

// const event = new EventEmitter();

// x
// event.on('hello',()=>{
//     console.log('sk')
// })
//Event Driven programming
// Event-driven programming, or event-oriented programming, is a paradigm where entities (objects, services, and so on) communicate indirectly by sending messages to one another through an intermediary. The messages are typically stored in a queue before being handled by the consumers.
//Component 
// Event Object.
// Event Source.
// Event Listener.

//Event-driven programming is a programming paradigm in which program execution is determined by new user events (mouse clicks, keypresses),
//Event Module
//Node js has built in module called 'events' where you can create-,fire- and listen for- your own event.

//Example 1- Registering for the event to be fired only one time using once.
// Example 2 - Create an event emitter instance and register a ccouple of callbacks
//Example 3- Register for the events with callback parameters.

// .emit is used to trigger an event · on is used to add a callback function that's going to be executed when the event is triggered.

// const EventEmitter = require('events')

// const event = new EventEmitter();
// event.emit('getName');

// event.on('getName',()=>{
//     console.log('Your Name is Sushil')
// });


// const EventEmitter = require('events')
// const start = new EventEmitter();

// start.on('getText',()=>{
//     console.log("Sk")
// })
// start.on('getText',()=>{
//     console.log("Pk")
// })
// start.on('getText',()=>{
//     console.log("Ns")
// })

// start.emit('getText'); 

//getText name of event
//Listen and then emit. Order matter. We can pass more arguments also.
const EventEmitter = require('events')
const start = new EventEmitter();

start.on('getText',(status,messages)=>{
    console.log(`${status}- ${messages}`)
})

start.emit('getText',200,'ok');



