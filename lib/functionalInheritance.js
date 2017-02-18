'use strict';

// use functions to do inheritance which provides a way for private members

// the parent objectmaker function
var parentFn = function parentFn(name) {
	var treasureLocation = 'secretBackStore';
	var name = name === undefined ? 'John Smith' : name;

	var that = {};

	that.getName = function () {
		console.log(name + ' : invoked in parent');
	};
	that.getTreasure = function () {
		console.log(treasureLocation);
	};
	return that;
};

// object from parent
var oldObject = parentFn('Tim');

// console.log(oldObject);

// oldObject.getName();

// oldObject.getTreasure();

// child objectmaker function
var childFn = function childFn(name) {
	var skier = 'Sky is a layer for shortsighted';

	var that = parentFn(name);

	var super_getName = that.getName.bind(that); // bind a property to the 'super' method of parent

	that.getName = function () {
		console.log(name + ' : invoked in child');
	};

	that.getSky = function () {
		console.log(skier);
	};

	that.super_getName = super_getName; // use this to invoke the super method

	return that;
};

// object from child : inheriting traits from parent
var youngObject = childFn('Ingram');

console.log(youngObject);

youngObject.getName();
youngObject.super_getName();
// youngObject.getTreasure()
// youngObject.getSky()

// this is too perfect for JS in terms of inheritance. Everything is so simple, without hacks, works out of the box,
// glorifies functions, no repititions, seems efficient. Hardly any flaws but I think there is a  minor one.
// Every property or method which is 'inherited' becomes the 'own property' in the child object,
//  on the same level as other 'own properties' of the child object. So, there is no way of knowing if which 
// ones were 'inherited' and which were its 'own'. however, that may not matter most times. But, hey atleast
// we got privacy. The private properties can only be accessed/changed using the member methods. 
// No properties or methods can be added or removed directly. The only access is through methods. Cool !
// However, to invoke super methods, we used the bind function to retain the 'super' method/property of the 'parent'
// in a private variable and make that variable a member of the 'child' object. As the variable stored a reference to  
// the 'super' method, using the same name (and affectively overwriting) the 'super' method in the 'child' object 
// doesn't harm us because the reference to the 'super' method is still stored in the variable which can be 
// accessed anytime. Neat !