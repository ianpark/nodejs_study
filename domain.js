var EventEmitter = require("events").EventEmitter;
var domain = require("domain");
var emitter1 = new EventEmitter();

// Create a domain
var domain1 = domain.create();

domain1.on('error', function(err) {
	console.log("Domain1 handled this error ("+err.message+")");
});

// Explicit binding
domain1.add(emitter1);

emitter1.on('error', function(err){
	console.log("Listener handled this error ("+err+")");
});

emitter1.emit('error', new Error('To be handled by listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err) {
	console.log("domain2 handled this error("+err.message+")");
});

domain2.run(function() {
	var emitter2 = new EventEmitter();
	emitter2.emit('error', new Error('To be handled by domain2'));
});

domain1.remove(emitter1);

emitter1.emit('error', new Error('Converted to exception. System will crash!'));