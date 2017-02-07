
// the length of array is dynamic ; if you keep a value at a place greater than the current length, it's size will expand
// array.length gives back the largest integer of the position where a value is present, it doesn't necessarily represent
// the total number of values.

// var sampleArray = []
// console.log(sampleArray.length);
// sampleArray[2001] = 'abcs'
// console.log(sampleArray.length)
// console.log(sampleArray)

//------------------------------------------------------------------------------------------------------------------------

// // the subscript/index/key of the array is set to be a positive integer by convention but it can be set to 
// // a negative integer, a float, a string, an object or even an array !

// var corruptArray = []

// corruptArray['lol'] = 45;
// console.log(corruptArray['lol'])

// corruptArray[-9] = 67
// console.log(corruptArray[-9])

// corruptArray[4.7] = 32
// console.log(corruptArray[4.7])

// corruptArray[[3,5,7]] = 15
// console.log(corruptArray[[3,5,7]])

// console.log(corruptArray.length)  // zero length !!! because the elements' indices are not integers

// corruptArray['funk'] = ()=>'funk invoked'
// console.log(corruptArray['funk']())

// corruptArray['objecting'] = {'name':'liam ','age':45}
// console.log(corruptArray['objecting'].name+corruptArray['objecting'].age)

// // array is just an object with some array specific functions like splice,slice, length etc. , nothing more.

//-----------------------------------------------------------------------------------------------------------------

var fireArray = [4,8,3,8,8,2,6]

delete fireArray[1]  // as array is an object, properties can be deleted using delete but it leaves hole in memory and ...

console.log(fireArray.length)  // ... therefore the length is still 4
console.log(fireArray[1])      // undefined 

fireArray[1] = 78

fireArray.splice(1,1)   // splice's first argument is the index from where the element is to be removed and second 
                        // argument is the no. of elements to be removed. splice will shift the array to the left. Slow!

var shortArray = fireArray.slice(0,3)  // plucks the elements from the first argument index (including) to the
                                       // second argument index(excluding)



