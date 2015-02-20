var luminosity = function(r, g, b) {
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

var darken = function(r, g, b) {
	var red = r * .8
	var green = g * .8
	var blue = b * .8
	return red + " " + blue + " " + green;
}


module.exports = {
	lumin: luminosity,
	dark: darken,
};

