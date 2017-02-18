'use strict';

var ObjectorFunction = function ObjectorFunction(lie) {
	this.lies = lie;
	this.truth = 'no truth';
	this.luck = function () {
		console.log('just some words.huh');
	};
	return this;
};

ObjectorFunction.prototype.wit = function () {
	console.log(this.lies + " and " + this.truth);
};

var lart = new ObjectorFunction('liar lies in liar\'s layer of lair');
// the new object is created with __proto__ set to ObjectorFunction {} object

// lart.wit();

// lart.luck();

console.log(lart);

// -----------------------------------------------------------------------------------------------------------------------

var copycat = function copycat(constructor) {
	var obj = {}; // the new object is initiated with __proto__ set to Object {} object
	console.log(constructor.prototype);
	obj = constructor.prototype;
	// console.log(obj);
	var parameters = Array.prototype.slice.apply(arguments);
	constructor.apply(obj, parameters.slice(1));
	return obj;
};

var mart = copycat(ObjectorFunction, 'liar lies in liar\'s layer of lair');

// lart.wit();

// lart.luck();

console.log(mart);

//-----------------------------------------------------------------------------------------------------------------------------

// Although the lart and mart will give same results with same methods and will be same for all practical purposes,
// there is a subtle difference between the two. Lart has the following prototype chain :
// lart ==> __proto__ = ObjectorFunction {} ==> __proto__ = (root) Object {}
// mart ==> __proto__ = (root) Object {}

//----------------------------------------------------------------------------------------------