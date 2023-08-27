# KetoCSS

**_The lean variable-first atomic design framework!_**

---

This is my personal CSS Framework or project starter kit based on SASS (SCSS) and CSS Variables. This Framework is heavily inspired by `ACSS` ([Automatic CSS by Kevin Geary](https://automaticcss.com/)).

The framework includes classes for common CSS rules (e.g. grids, flex, column-counts, etc.), and tons of readily available CSS variables for nearly every property you would need in your projects.

**This is a work in progress.**

## INSTALLATION

To use this CSS Framework, clone this repo or download the zip file and extract it. There are two versions:

i. SASS only - This is the version I use personally and it uses the `Live SASS Compiler` plugin to compile the SASS, and `purgeCSS` to clean up unused CSS in the final CSS output.

I chose this method because the SASS compiler used in PostCSS does not output colors as `hsl` and forces transparent variants to output as `rgba` too. I want my compiled colors to remain in `hsl` format.

To use this version, install [Live SASS Compile](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass&ssr=false). I have included a local setting for the plugin under `.vscode` folder. You can modify it to fit your project structure. Click on `Watch SASS` to compile.

Also, delete `package-postcss.json` and `postcss.config.js` since you don't need them for this version.

Finally, when you are ready to deploy, run `pnpm install` to install `purgeCSS` plugin, then run `pnpm purge` to remove unused CSS in the final compiled CSS.

ii. PostCSS and plugins - This is the best version if you don't mind your final colors being in `hex` and `rgba` formats.

To use this version...

Delete `package.json`.

Rename `package-postcss.json` to `package.json`.

Install all dependencies:

```bash
pnpm install
```

Start up PostCSS

```bash
pnpm start
```

Build!

PostCSS handles everything and you don't have to do anything extra.

_You can use `npm` too._

```

```
