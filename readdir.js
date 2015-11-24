var fs = require("fs");
console.log("Going to read directory /tmp");
fs.readdir("d:/", function(err, files) {
	if(err) {
		return console.error(err);
	}
	files.forEach( function (file) {
		console.log(file);
	});
});
