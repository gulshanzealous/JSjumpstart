var memoizer = function (memo, fundamental) {
	var shell = function (n) {
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

var func1 = function(name){
	var that = this;
	this.one = "vehicle"+name;
	console.log(name+'passed to func1');
	var func2 = function(){
		console.log(name+'passed to func2');
		var func3 = function (){
			console.log(name+'passed to func3');
		}

	}
	return func2;
}

var add = function(one,two){
	return one+two;
}

var sum = add(3, 4);


var myObject = {
	value: 4,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	},
	double: function(){
		var that = this;
		// Workaround.
		var helper = function(){
			that.value = add(that.value, that.value);
			}
		helper();
	// Invoke helper as a function.
	}
}
// Augment myObject with a double method.

// Invoke double as a method.
var result = myObject.double();
console.log(result);
// 6