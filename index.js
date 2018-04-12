/*
Objects
*/

// use const (defines a constant... can't be re-assigned) + let (defines a variable)
// object = a collection of key/value pairs

/*
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	draw: function() {
		console.log('draw');
	}
};
circle.draw();
*/

// object with one or more method... it has behaviour (can do different things)
// not a good idea to duplicate objects with behaviour, as it's difficult to debug
// better to use 'Factories' (Constructor Function)



// * 2 ways to creat an objecxt
// --------------------------------------------

/*
1. Factory Function
*/
/*
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	};
}
const circle = createCircle(1);
circle.draw();
*/

/*
2. Constructor Function (use 'this' with 'new')
*/

/*
function Circle(radius) {  // first letter is 'Uppercase'
	this.radius = radius; // use 'this' to set the properties of this object.... 'this' repesent the... that will be executing this function
	this.draw = function() {
		console.log('draw');
	}
}
const another = new Circle(1); // creates 'new' circle... 1/ creates an empty onject 2/ sets 'this' to point to that object' 3/ return that object

*/



// Constructor Property
// --------------------------------------------

// (references the function that was used to construct/create that 'object')
// every object has one
let x = {}
// let x = new Object();
// new String(); = "",'',``
// new Boolean(); = true, false
// new Number(); = 1,2,3,4



// Function are Objects
// --------------------------------------------

function Circle(radius) {  // first letter is 'Uppercase'
	this.radius = radius; // use 'this' to set the properties of this object.... 'this' repesent the... that will be executing this function
	this.draw = function() {
		console.log('draw');
	}
}
// Circle.call({}, 1) = Circle.apply({}, [1,2,3]) = const another = Circle(1);... basically, functions are methods











