/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code
 */
//const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
//Solution 1
(async () => {

	function golfScore(par, strokes) {
		// Only change code below this line
		switch (true) {
			case strokes == 1:
				return 'Hole-in-one!';
			case strokes <= par - 2:
				return 'Eagle';
			case strokes == par - 1:
				return 'Birdie';
			case strokes == par:
				return 'Par';
			case strokes == par + 1:
				return 'Bogey';
			case strokes == par + 2:
				return 'Double Bogey';
			case strokes >= par + 3:
				return 'Go Home!';
			default:
				return;
		}
		// Only change code above this line
	}
})();
