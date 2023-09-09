const postcss = require("postcss");
const postcssSass = require("@csstools/postcss-sass");
const purgeCSS = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const pxtorem = require("@minko-fe/postcss-pxtorem");

module.exports = {
	plugins: [
		postcss([postcssSass()]).process("src/scss/app.scss"),
		require("autoprefixer"),
		pxtorem({
			rootValue: 16,
			selectorBlackList: ["some-class"],
			propList: ["*"],
			atRules: ["media"],
			// ...
		}),
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
