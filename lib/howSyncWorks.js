'use strict';

function zero(p) {
	console.log(p);
}

(function first() {
	var a = 2;
	var b = 3;
	var c = 4;
	var d = 5;

	var resSecond = second(a);
	if (resSecond === true) zero('done second');else zero('failed second');

	var resThird = third(b);
	if (resThird === true) zero('done third');else zero('failed third');

	var resFifth = fifth(c);
	if (resFifth === true) zero('done fifth');else zero('failed fifth');
})();

function second(x) {
	if (x === 2) return true;
	return false;
}

function third(x) {
	console.log(x);
	var value = midder1(x);
	return value;
}

function midder1(x) {
	var value = midder2(x);
	return value;
}
function midder2(x) {
	var value = midder3(x);
	return value;
}
function midder3(x) {
	var value = midder4(x);
	return value;
}
function midder4(x) {
	var value = midder5(x);
	return value;
}
function midder5(x) {
	var value = midder6(x);
	return value;
}
function midder6(x) {
	var value = fourth(x);
	return value;
}

function fourth(x) {
	if (x === 3) return true;
	return false;
}

function fifth(x) {
	if (x === 4) return true;
	return false;
}

// first();