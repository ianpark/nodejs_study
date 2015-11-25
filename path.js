var path = require("path");

// c:\log\ggg\ccc\ddd
console.log(path.normalize("c:/log/dfd/./s/../../ggg/ccc/ddd/eee/.."));
// c:\a\b\c
console.log(path.join("a", "b", "../metal"));

console.log(path.resolve("hello/world/me", "../babo/metal"));

var dns = require("dns");
dns.lookup("google.com", function(err, addr) {
	if(err) {
		console.error(err);
	} else {
		console.log(addr);
	}
});

dns.resolve("facebook.com", function(err, addr) {
	if(err) {
		console.error(err);
	} else {
		console.log(addr);
	}
})
