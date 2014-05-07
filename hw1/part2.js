#!/usr/bin/env node

// check if the number if prime
var isPrime = function(n) {
	var i = 2;
	for(i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
		if(Math.floor(n/i) == Math.ceil(n/i)) {return false;}
	}
	return true;
};


var genPrime = function(k) {
	var arr = [];
	arr.push(2);
	var i = 1;
	var n = 3;
	while(i < k) {
		if(isPrime(n)) {
			arr.push(n);
			i++;
		}
		n++;
	}
	return arr.join(",");
};

var k = 100;
out = genPrime(k);
var fs = require('fs');
var outfile = "primes.txt";
fs.writeFileSync(outfile, out);
console.log("Done!");
console.log(Math.floor(8/3));
console.log(Math.ceil(8/3));
console.log(Math.ceil(Math.sqrt(8)));
