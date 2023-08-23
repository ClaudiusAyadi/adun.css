const purgecss = require("@fullhuman/postcss-purgecss");
const postcssSass = require("@csstools/postcss-sass");
const postcss = require("postcss");

module.exports = {
	plugins: [
		postcss([postcssSass()]).process("src/scss/app.scss"),
		require("postcss-preset-env"),
		purgecss({
			content: ["./**/*.html"],
		}),
		require("cssnano"),
	],
};
