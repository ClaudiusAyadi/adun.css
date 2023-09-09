const postcss = require("postcss");
const postcssSass = require("@csstools/postcss-sass");
const purgeCSS = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
	plugins: [
		postcss([postcssSass()]).process("src/scss/app.scss"),
		require("autoprefixer"),
		purgeCSS({
			content: [
				"./**/*.{html,js,jsx,ts,tsx,php}",
				"./src/**/*.{html,js,jsx,ts,tsx,php}",
				"./components/**/*.{html,js,jsx,ts,tsx,php}",
			],
		}),
		cssnano({
			preset: [
				"default",
				{
					colormin: false,
				},
			],
		}),
	],
};
