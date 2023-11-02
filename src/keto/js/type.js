import fs from "fs";
import keto from "../../../keto.config.js";

const fontSizes = keto.fontSizes;

// Create the SCSS map strings
const fontSizesMap = `$fontSizes: (\n${Object.entries(fontSizes)
	.map(([fontSizes, value]) => `${fontSizes}: ${value}`)
	.join(",\n")}\n);\n`;

// Read the existing content of workers.scss
fs.readFile("src/keto/scss/abstracts/_workers.scss", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading workers.scss:", err);
		return;
	}

	// Find & replace the existing $fontSizes map
	const fontSizesRegex = /\$fontSizes:\s*\([\s\S]*?\);/g;
	const oldFontSizes = data.match(fontSizesRegex);

	// Append the new $fontSizes map to workers.scss
	const newFontSizes = data.replace(oldFontSizes, "").trim();
	const newFontSizesMap = newFontSizes + "\n" + fontSizesMap;

	// Write the final content back to workers.scss
	fs.writeFile("src/keto/scss/abstracts/_workers.scss", newFontSizesMap, (writeErr) => {
		if (writeErr) {
			console.error("Error adding Font Sizes to workers.scss:", writeErr);
		} else {
			console.log("Font Sizes maps have been updated in workers.scss!");
		}
	});
});
