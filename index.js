const PNGImage = require("pngjs-image");
const Array2D = require("array2d");

const defPalette = [
	16777215,
	13487565,
	8947848,
	5592405,
	2236962,
	0,
	16754641,
	15007744,
	8388608,
	16768458,
	16167817,
	15045888,
	10512962,
	6307880,
	15063296,
	9756740,
	179713,
	24320,
	54237,
	33735,
	234,
	13594340,
	16711935,
	8519808,
];

function h(input) {
	return input;
}

module.exports = (inputPath, palette = defPalette) => {
	PNGImage.readImage(inputPath, (error, image) => {
		if (error) {
			throw error;
		}

		const array = Array2D.build(image.getWidth(), image.getHeight());

		return require("fs").writeFileSync(require("path").normalize("./output.json"), JSON.stringify(Array2D.map(array, (pixel, x, y) => {
			const indexOf = palette.indexOf(image.getColor(y, x));
			return indexOf === -1 ? 0xFF : indexOf;
		})));
	});
};
console.log(module.exports("./test2.png"));