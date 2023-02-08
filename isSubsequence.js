// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the
// first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'ac')); // false
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

function isSubsequence(string1, string2) {
	const string1Arr = string1.trim().split('');
	const string2Arr = string2.trim().split('');
	const charMatchArr = [];
    for(let i = 0; i < string1Arr.length; i ++){
       	const indexInstring2Arr = string2Arr.indexOf(string1Arr[i]);
		if (indexInstring2Arr < 0) return false;
		charMatchArr.push(indexInstring2Arr); 
    }
	if (checkIfArrAscending(charMatchArr)) return true;
	return false;
}

function checkIfArrAscending(arr) {
	//good solution to check but problem is we check i === 0 for every index
	return arr.every((arrEl, index) => {
		return index === 0 || arrEl >= arr[index - 1];
	});
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('abc', 'ac'))
