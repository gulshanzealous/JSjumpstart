"use strict";

var req = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
};

var obj = {};

// {obj.x:obj.x, obj.y:obj.y} = { req.b:req.b, req.c:req.c };

var _x$z = { x: req.d, z: req.b },
    x = _x$z.x,
    z = _x$z.z;

// var obj = { x , z}

// console.log(obj);

console.log(x);
console.log(z);

//--------------------------------------------------------------------------------------------------------

// var { x:x,y:y,z:z } = getValue(5);

// function getValue(t) {
// 	var x = t;
// 	var y = 9;
// 	var z = 4;

// 	return { x,y,z };
// }

// console.log(x);
// console.log(y);
// console.log(z);

//--------------------------------------------------------------------------------------------------------------


// function getArray () {
// 	return [4,null,1];
// } 

// var [p,q,r] = getArray();

// console.log(p);
// console.log(q);
// console.log(r);

//--------------------------------------------------------------------------------------------------------------

// import { name, age } from './exporter';

// console.log(name);
// console.log(age);