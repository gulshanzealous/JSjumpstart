
var closureObjectCreator  = function(){
	var value = 47;
	console.log(this);             // global object
	return {
		printValue : function(){
			// console.log(this);  // the object which contains the method printValue and prototype of root Object
			
			return value;          // This is closure because value here has reference to value defined in outer function even
         	                       // after it was returned. The variable value is hidden and cannot be accessed directly
         	                       // from outside effectively making it a private variable/property.
		}
	};
};

var init = closureObjectCreator();  // closureObjectCreator is executed here and return a object which has printvalue method

console.log(init.printValue());

// -------------------------------------------------------------------------------------------------------------------

// var closureObjectCreator  = function(){  // closureObjectCreator is immediately executed returning an object with prinValue method
// 	var value = 47;
// 	console.log(this);             // global object
// 	return {
// 		printValue : function(){
// 			// console.log(this);  // the object which contains the method printValue and prototype of root Object
			
// 			return value;          // This is closure because value here has reference to value defined in outer function even
//          	                       // after it was returned. The variable value is hidden and cannot be accessed directly
//          	                       // from outside effectively making it a private variable/property.
// 		}
// 	};
// }();

// console.log(closureObjectCreator);

// console.log(closureObjectCreator.printValue());


//--------------------------------------------------------------------------------------------------------------------------
// // the following object doesn't hide the simpleObject's property value. There is no sense to use the getValue method to 
// // get the value of value property because i can simply get it by simpleObject.value. The value property is publicly available
// // I will use closure to hide the property, effectively creating a private property.

// var simpleObject = {                                 // normal object with properties and methods.
// 	valueofthis : console.log(this),                    // for constructor function, see the block below
// 	value : 0,
// 	getIncrement : function(n){
// 		this.value += typeof n === 'number'? n : 0; 
// 	},
// 	getValue : function(){
// 		console.log(this.value);
// 	}
// };


// simpleObject.valueofthis;           // Global object

// console.log(simpleObject.value);    // 0

// simpleObject.getIncrement(4);

// simpleObject.getValue();            // 4

// simpleObject.getIncrement(7);

// simpleObject.getValue();            // 11

// console.log(simpleObject.value);    // 11

//-------------------------------------------------------------------------------------------------------------------------

// // replication of above function. The only difference is that this 'block' of code uses a custructor funciton to create a new object 
// // and then test its public methods. the objective is same as the above block's code by way of 
// // exposing public properties and public methods.

// var ConstructObject = function(){
// 	this.getReference = console.log(this);
// 	this.value = 0;
// 	this.getIncrement = function(inc){
// 		this.value += typeof inc === 'number'? inc : 0;
// 	}
// 	// return this;   (this - the new object instance is being returned implicitly from here.)
// }

// ConstructObject.prototype.getValue = function(){  // adding a new property to constructor function : the function which will spit
// 	console.log(this.value);                      // out the new object. This new object is the prototype of the costructor 
// }                                                 // function which we call with the new keyboard to create the new object.

// var rogue = ConstructObject(); // this initiates a normal call to the function. Because the new keyword is not used for this call,
// // no object is returned from the ConstructorObject because 'this' is never returned.
// // Instead all the statements are run one by one and undefined is returned.
// // One very important thing is that this Constructor function is run with the value of 'this' set 
// // to global object while the function is being executed.
// // Due to absence of new keyword, there is no implicit return of 'this' (the prototype object + methods and
// // properties attached to the 'future' object) and we have set no explicit value to return from this function.
// // As we know that when a function does not return anything, 'undefined' is returned. 
// // Hence, the rogue variable will have the value 'undefined'.Huh!

// // In this case, as function will start running with the value of 'this'  when the first statement will run,
// // which is printing the value of 'this' to console - which will be Global object. However, this is just for demonstration,
// // global object IS NOT BEING RETURNED.

// console.log(rogue);            // undefined
// // // console.log(rogue.this);    // error because well, it's undefined ! accessing from undefined,why? why? why?

// var fireObject = new ConstructObject(); // new object returned through 'this' (this contains prototype of ConstructorObject function)

// console.log(fireObject);

// fireObject.getReference;               // ConstructObject {} 
// // because when we called it with 'new' operator,two things happened
// // 1. 'this' has been reassigned to the yet unassigned new object which is equal to enhanced prototype : explained in braces below
// //     { the prototype of ConstructorObject function e.g. getValue() + methods and properties
// //       attached to 'future object' e.g. getReference, value, getIncrement() }
// //     As the newly initialized object is using the enhanced prototype of the ConstructorObject function,
// //     the object is called ConstructObject {}. This ConstructObject {} is the 'factory object' which will be assigned
// //     to the any variable which invokes the ConstructObject function with 'new' operator.
// // 2. as we know, 'this' contains the new object and the 
// //     ConstructorObject function will implicitly return 'this' (both due to use of new operator),
// //     'this' will return the new object which will be assigned to whatever you have on the left hand side of the expression.

// // So, the variable rogue will contain an object which has 'inherited' all the properties and methods defined in the 
// // ConstructObject function and ConstructObject function's prototype.

// console.log(fireObject.value);       // 0

// fireObject.getIncrement(45);

// fireObject.getValue();               // 45

// fireObject.getIncrement(23);

// fireObject.getValue();              // 68

// console.log(fireObject.value);       // 68

//--------------------------------------------------------------------------------------------------------------------------
















