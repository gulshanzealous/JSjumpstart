'use strict';

var complexArray = [];

var obj = {
	name: '123',
	mobile: 2343434
};

for (var i = 0; i < 5; i++) {
	complexArray.push(obj);
}

var nameArray = complexArray.map(function (obj) {
	return obj.name;
});

console.log(nameArray);