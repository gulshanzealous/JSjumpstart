
var fibonacci = function(){
	var mem = [0,1];

	var fib = function(n){
		var memVal = mem[n];
		if(typeof memVal !== 'number'){
			memVal = fib(n-1)+fib(n-2);
			mem[n] = memVal;
		}
		return memVal;
	}
	return fib;
}();

console.log(fibonacci(10));

