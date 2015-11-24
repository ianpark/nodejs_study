var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open existing file");
fs.open('input.txt', 'r+', function (err, fd) {
	if(err) {
		return console.error(err);
	}
	
	console.log("File opened successfully!");
	console.log("Going to read the file");
	fs.read(fd, buf, 0, buf.length, 15, function (err, bytes, data) {
		if (err) {
			console.log(err);
		}
		console.log(bytes + " bytes read");
		console.log("content: " + data);
		
		// Print only read bytes to avoid junk.
		if(bytes > 0) {
			console.log("In buffer: " + buf.slice(0, bytes).toString());
		}
	});
});
