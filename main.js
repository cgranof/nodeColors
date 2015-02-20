/*var luminosity = function(r, g, b) {
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

console.log(luminosity(255, 239, 213))
*/



var luminosity = function(r, g, b) {
	var islight = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	if (islight > 155) {
		console.log("light");
	}
	else (console.log("dark"));
};


console.log(luminosity(23, 29, 23))

