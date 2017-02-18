'use strict';

var sequenceGenerator = function sequenceGenerator() {
	var mixer = ''; // mixer and random proprties can never be accessed by any means. data hinding here.
	var random = 343;
	console.log(this);

	return {
		set_mixer: function set_mixer(feeder) {
			console.log(this);
			mixer = feeder;
		},
		set_random: function set_random(number) {
			random = random + number;
		},
		get_sequence: function get_sequence() {
			// expose get_sequence to third party and it can not access the private properties or 
			random += 1; // private methods like set_mixer and set_random
			return mixer + random;
		}
	};
};

var sequenceVariable = sequenceGenerator();

sequenceVariable.set_mixer('life');

sequenceVariable.set_random(54);

console.log(sequenceVariable.get_sequence()); // just get a value