'use strict';

var memoizer = function memoizer(memo, fundamental) {
	var shell = function shell(n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	};
	return shell;
};

// var fibonacci = memoizer([0, 1], function (shell, n) {
// 	return shell(n - 1) + shell(n - 2);
// });

var func1 = function func1(name) {
	var that = this;
	this.one = "vehicle" + name;
	console.log(name + 'passed to func1');
	var func2 = function func2() {
		console.log(name + 'passed to func2');
		var func3 = function func3() {
			console.log(name + 'passed to func3');
		};
	};
	return func2;
};

var add = function add(one, two) {
	return one + two;
};

var sum = add(3, 4);

var myObject = {
	value: 4,
	increment: function increment(inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	},
	double: function double() {
		var that = this;
		// Workaround.
		var helper = function helper() {
			that.value = add(that.value, that.value);
		};
		helper();
		// Invoke helper as a function.
	}
};
// Augment myObject with a double method.

// Invoke double as a method.
var result = myObject.double();
console.log(result);
// 6