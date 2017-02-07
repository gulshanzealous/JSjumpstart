
// apply,call, bind are used by one object to borrow functions from other objects. Achieved by changing the value of 'this'

var argumentMess = {
	greeting : 'i\'ll mess you',
	messer : function (a,b,c) {
		console.log(typeof a == typeof b? this.greeting : this.greeting + ' messed');
	},
	equator : function(){
		var args = Array.prototype.slice.apply(arguments) // using slice to convert array-like object(arguments) to an array
		console.log(args.findIndex(x=>x===343))
	}
}

var gotit = argumentMess.messer(1,'7',5);

var messinger = {
	greeting : 'messer got'
}
//  //--------------------------------------------------------------------------------------------------------------------------------
var applied = argumentMess.messer.apply(messinger,[1,6,3]);      // borrow function for one-time use, arguments passed in array

var caller = argumentMess.messer.call(messinger,12,[76],34);  // borrow function for one-time use, arguments passed normally

var bounder = argumentMess.messer.bind(messinger);   // borrow the whole function for later use, possibly multiple times

var boundRes = bounder(5,7,3);
// //---------------------------------------------------------------------------------------------------------------------------------

argumentMess.equator(4,67,4,343,5);

argumentMess.equator.apply(messinger,[34,4,56,6]) 

var borrowedEquator = argumentMess.equator.bind(messinger,343); // pass parameters during bind

borrowedEquator('45',.56,445,'rgerg',[],343) // pass more parameters to bound function

