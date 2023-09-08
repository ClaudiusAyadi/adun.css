import fs from "fs";
import keto from "../../keto.config.js";

const fontFamily = keto.fontFamily;
const fontSizes = keto.fontSizes;

// Create the SCSS map strings
const fontFamilyMap = `$fontFamily: (\n${Object.entries(fontFamily)
	.map(([fontFamily, value]) => `${fontFamily}: ${value}`)
	.join(",\n")}\n);\n`;

const fontSizeMap = `$fontSizes: (\n${Object.entries(fontSizes)
	.map(([fontSize, value]) => `${fontSize}: ${value}`)
	.join(",\n")}\n);\n`;

// Read the existing content of workers.scss
fs.readFile("src/scss/abstracts/_workers.scss", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading workers.scss:", err);
		return;
	}

	// Find & replace the existing $fontFamily map
	const fontFamilyRegex = /\$fontFamily:\s*\([\s\S]*?\);/g;
	const oldFontFamily = data.match(fontFamilyRegex);

	// Find & replace the existing $fontSizes map
	const fontSizeRegex = /\$fontSizes:\s*\([\s\S]*?\);/g;
	const oldFontSize = data.match(fontSizeRegex);

	// Append the new $fontFamily and $fontSizes maps to workers.scss
	const newFonts = data.replace(oldFontFamily, "").replace(oldFontSize, "").trim();
	const newFontMap = newFonts + "\n" + fontFamilyMap + "\n" + fontSizeMap + "\n";

	// Write the final content back to workers.scss
	fs.writeFile("src/scss/abstracts/_workers.scss", newFontMap, (writeErr) => {
		if (writeErr) {
			console.error("Error adding fonts to workers.scss:", writeErr);
		} else {
			console.log("Font maps have been updated in workers.scss!");
		}
	});
});
