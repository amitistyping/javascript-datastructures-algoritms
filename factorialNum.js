/**
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all
 * positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Only integers greater than or equal to zero will be supplied to the function.
 */

//Solution 1 with loop
function factorializeWithLoop(num) {
	let factorial = 1;
	for (let i = num; i > 0; i--) {
		factorial *= i;
	}
	return factorial;
}

factorializeWithLoop(5);

//Solution 2 with recursion
function factorialWithRecursion(num) {
	if (num == 0) {
		return 1;
	} else {
		return num * factorialWithRecursion(num - 1);
	}
}

factorialWithRecursion(5);
