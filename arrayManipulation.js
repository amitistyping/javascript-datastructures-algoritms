//1. Manipulate Arrays With shift Method

/**
 * Use the .shift() function to remove the first item from myArray and
 * assign the "shifted off" value to a new variable, removedFromMyArray.
 */

(async () => {
	// Setup
	const myArray = [
		['John', 23],
		['dog', 3],
	];

	// Only change code below this line
	console.log(myArray.shift());
})();


/**
 * Add ["Paul", 35] to the beginning of the myArray variable using unshift().
 */

(async () => {
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
})();