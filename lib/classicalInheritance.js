'use strict';

// // Instead of having objects inherit directly from other objects, an unnecessary level of
// // indirection is inserted such that objects are produced by constructor functions.
// // When a function object is created, the Function constructor that produces the func-
// // tion object runs some code like this:
// // this.prototype = {constructor: this};
// // The new function object is given a prototype property whose value is an object con-
// // taining a constructor property whose value is the new function object. The
// // prototype object is the place where inherited traits are to be deposited. Every func-
// // tion gets a prototype object because the language does not provide a way of deter-
// // mining which functions are intended to be used as constructors. The constructor
// // property is not useful. It is the prototype object that is important.
// // When a function is invoked with the constructor invocation pattern using the new
// // prefix, this modifies the way in which the function is executed. 

// this is classical inheritence using deafult built in tools

var Mammal = function Mammal(name) {
	// this constructor acts as a parent class. 
	this.name = name || "Koala"; // this is a public property
};

Mammal.prototype.get_name = function () {
	// this is a public property added to the parent class
	return this.name;
};

//-----------------------------------------------------------------------------------------------------------------------

var strayMammal = new Mammal('stray'); // a new object is created using Mammal function which acts as a class

// console.log(strayMammal);

//------------------------------------------------------------------------------------------------------------------------

var Cat = function Cat(name) {
	// create a new 'class' which will be used as child 'class' for Mammal 'class'.
	this.name = name; // create public propoerties for the Cat 'class'
	this.saying = '';
};

Cat.prototype = new Mammal(); // inherit the properties and methods from parent 'class'.
// Under the hood, these things will happen in this step :
// 1. A new object will be created.
// 2. The Mammal constructor/'class' will be called while setting 'this' to the new object. 
// 3. hence,__proto__ of new object will be set to 'own' members of Mammal 'parent' and __proto__ of Mammal 'parent'
//    will be stored in the __proto__ kept among members.
// 3. The new object hence created will be returned with all underlying prototypes
// 4. The child 'class'/ child constructor's prototype will be set this new object

Cat.prototype.angry = function () {
	return this.name + ' is ' + 'angry';
};

Cat.prototype.get_name = function () {
	return this.name + ' says ' + 'mewmew';
};

//-------------------------------------------------------------------------------------------------------------------------

var cate = new Cat('plucky');

console.log(cate);
// console.log(cate.angry());
console.log(cate.get_name());
// console.log(strayMammal.get_name.apply(cate));

//// ---------------------------------------------------------------------------------------------------------------------------

// //If the new operator were a method(added below to global object) instead of an operator, it could have been implemented like this:

// Object.prototype.method = function(name,func){
// 	if(!this.prototype[name]) { this.prototype[name]=func; }
// 	return this;
// }

// if(typeof Object.create !== 'function'){
// 	Object.create = function(parentObject){
// 		var f = function(){};
// 		f.prototype = parentObject;
// 		return new f();
// 	}
// }

// Function.method('new', function ( ) {
// 	// Create a new object that inherits from the constructor's prototype using create method added above
// 	var that = Object.create(this.prototype);
// 	// Invoke the constructor, binding –this- to the new object.
// 	var other = this.apply(that, arguments);

// 	// console.log(this);
// 	// console.log(that);
// 	// If its return value isn't an object, substitute the new object.
// 	return (typeof other === 'object' && other) || that;
// });

// var Parent = function(name){
// 	this.name = name || "cold";
// }
// Parent.prototype.kind = 'no';
// Parent.prototype.rich = 'o yea';


// var childObject = Parent.new();

// childObject.young = 'young';

// console.log(childObject);   
// console.log(childObject.name);   
// console.log(childObject.hasOwnProperty('name'));    // true because Parent constructor was called with new object which
//                                                     // resulted in Parent's own properties and methods to become childObject's
//                                                     // own methods and properties.
// console.log(childObject.kind);
// console.log(childObject.hasOwnProperty('kind'));   // false because Parent's prototype is referenced 
// // by childObject object's __proto__[constructor] property. It contains a function which has 'inherited values'.

// // Parent
// // 	name:"beer"
// // 	young:"young"
// // 	__proto__:Object
// // 				constructor:(name)
// // 					kind:"no"
// // 					rich:"o yea"
// // 					__proto__:Object

// //---------------------------------------------------------------------------------------------------------------------------------

//  Easier / shorter way to do the above classical inheritence.

// Object.prototype.method = function(name,func){
// 	if(!this.prototype[name]) { this.prototype[name]=func; }
// 	return this;
// }

// Function.method('inherits', function (Parent) {
// 	this.prototype = new Parent( );
// 	return this;
// });

// var Mammal = function(name){             // this constructor acts as a parent class. 
// 	this.name = name || "Anonymous";                    // this is a public property
// }

// Mammal.prototype.get_name = function(){   // this is a public property added to the parent class
// 	return this.name+' i was called';
// }

// var Cat = function(name){                // create a new 'class' which will be used as child 'class' for Mammal 'class'.
// 	// this.name = name;                    // create public propoerties for the Cat 'class'
// 	this.saying = '';
// }
// .inherits(Mammal)
// .method('angry' , function(){
// 	return (this.name + ' is ' + 'angry')
// })
// .method('get_name' , function(){
// 	return (this.name + ' says ' + 'mewmew');
// })

// var furryCat = new Cat();

// console.log(furryCat);
// console.log(furryCat.name);          
// console.log(furryCat.get_name());