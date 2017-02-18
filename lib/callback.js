"use strict";

function wantCallback(x, callback) {
	if (x > 0) {
		return callback(1, 1);
	}
	return callback(0, 0);
}

function callback(a, b) {
	if (a + b === 2) {
		return a * 3;
	}
	return a + 6;
}

var value = wantCallback(-7, callback);

console.log(value);

var a = wantCallback(-53, function (one, two) {
	if (one + two === 2) {
		return one * 4;
	}
	return one + 9;
});

console.log(a);
// ---------------------------------------------------------------------------------------------------------------------------------