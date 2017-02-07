
// var sampleObject = {
// 	value : 3
// }

// sampleObject.adder = function(addend){
// 	//console.log(this);                          // the sampleObject
// 	this.value += addend;
// 	return this;
// }

// sampleObject.subtracter = function(subs){
// 	this.value -= subs;
// 	return this;
// }

// sampleObject.modulus = function(){
// 	this.value = (this.value >= 0 ? this.value : (-1*this.value));	
// 	return this;
// }

// sampleObject.sqrt = function(){
// 	(this.value * this.value);
// 	return this;
// }

// sampleObject.freshen = function(fresher){
// 	return `${fresher} is : ${this.value}` ;
// }

// var complexCompute = sampleObject.adder(5).subtracter(13).modulus().sqrt().freshen('hellow');

// console.log(complexCompute);

//--------------------------------------------------------------------------------------------------------------------


var sampleObjectMaker = function(passed){
	var store = passed;                         // the store property is private here. Can't be accessed.

	return {
		value : store,
		adder : function(addend){
			//console.log(this);                          // the sampleObject
			this.value += addend;
			return this;
		},

		subtracter : function(subs){
			this.value -= subs;
			return this;
		},

		modulus : function(){
			this.value = (this.value >= 0 ? this.value : (-1*this.value));	
			return this;
		},

		sqrt : function(){
			(this.value * this.value);
			return this;
		},

		freshen : function(fresher){
			return `${fresher} is : ${this.value}` ;
		}
	}
}

// possibly, this is why jquery works. the cascading .... aaahhhhh

var complexCompute = sampleObjectMaker(1).adder(5).subtracter(13).modulus().sqrt().freshen("live");

console.log(complexCompute);

//------------------------------------------------------------------------------------------------------------------------------

// var ObjectMaker = function(entered){
// 	this.value = entered;
// }

// ObjectMaker.prototype.adder = function(){
// 	console.log(this);
// 	this.value += 34;
// 	console.log(this);
// 	return this;
// }

// ObjectMaker.prototype.remover = function(){
// 	console.log(this);
// 	this.value -= 20;
// 	return this;
// }

// ObjectMaker.prototype.sanity = function(text){
// 	console.log(this);
// 	this.value = this.value + " is sanity and "+ text;
// 	console.log(this);
// 	return this.value;
// }

// var numberBonded = new ObjectMaker(67);             // old way of using prototypes to make an object and chaining

// var result = numberBonded.adder().remover().sanity('death');

// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------
