
// prototypal inheritence without classes. Still no private members here but extremely simplified.

if(typeof Object.create !== 'function'){
	Object.create = function(parentObject){
		var func = function(){};
		func.prototype = parentObject;
		return new func();
	}
}

var sampleObject = {
	life : 'good',
	road : 'long'
}

var fireObject = Object.create(sampleObject);

fireObject.symbol = 'fire';
// fireObject.life = 'great'

console.log(fireObject);
console.log(fireObject.life);
console.log(fireObject.symbol);


// This is differential inheritance. By customizing a new object, 
//we specify the differences from the object on which it is based. Great.

var volcanoObject = Object.create(fireObject);

volcanoObject.lava = 'lavaaa'

console.log('volcano object below')
console.log(volcanoObject);
console.log(volcanoObject.life);
console.log(volcanoObject.symbol);
console.log(volcanoObject.lava)