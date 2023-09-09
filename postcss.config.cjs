const postcss = require("postcss");
const postcssSass = require("@csstools/postcss-sass");
const purgeCSS = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
	plugins: [
		postcss([postcssSass()]).process("src/scss/app.scss"),
		require("postcss-preset-env"),
		purgeCSS({
			content: ["./**/*.html"],
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
