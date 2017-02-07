
String.prototype.sanctify = function(){
	console.log(this);
	return this.trim()+' trimmed string';
	// return this+' : '+'sactified word';
}

var words = "i am a                         ";

console.log(words.sanctify());

//---------------------------------------------------------------------------------------
// Function.prototype.method = function(name,func){
	// if(!this.prototype[name]) { this.prototype[name]=func; }
// 	console.log('value of this in function prototype');
// 	console.log(this);
// 	return this;
// }

// Number.method('integer',function(){
// 	console.log(this);
// 	return Math.floor(this);
// });

// var quo = 20/3;

// console.log(quo.integer());

//---------------------------------------------------------------------------------------

// Number.prototype.integer = function(){
// 	console.log(this);
// 	return Math.floor(this);
// }

// var quo = 20/3;

// console.log(quo.integer());

// ----------------------------------------------------------------------------------------