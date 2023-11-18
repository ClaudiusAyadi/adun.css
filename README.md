# KetoCSS

**_The super-performant, variable-based, mobile-first, stack-agnostic (refactoring towards React since its my main stack now), lean atomic design framework!_**

---

This is my personal CSS Framework or project starter kit based on SASS (SCSS) and CSS Variables. This Framework is heavily inspired by `ACSS` ([Automatic CSS by Kevin Geary](https://automaticcss.com/)). It is the second version of my former SASS Starter Template. It simply shows my learning growth. So, it will always be a WIP (work-in-progress).

This framework is meant to express simplicity and speed, helping devs to quickly start designing their apps in no time.

If you are here, I would love your contributions no matter how little. The goal is to have a flexible CSS Framework that gives us needed utility classes without clogging up our HTML like TailwindCSS, and still allows unlimited freedom to use custom BEM classes powered by the keto-variables.

### FEATURES

The framework includes classes for common CSS rules (e.g. grids, flex, column-counts, buttons, font-related classes, etc.), and tons of readily available CSS variables for nearly every property you would need in your projects - global (root) and local (element, e.g. buttons) scoped.

**This is a work in progress. If you notice any bug, please let me know**

## GETTING STARTED

1. Clone the repo or download the zip file and extract it.
2. Copy the `devDependencies` into your project package.json and the `postcss.config.cjs` to your project root.
3. Delete the `package.json`, `.gitignore`, and `README.md` here.
4. Install all dependencies:

```bash
yarn
```

5. Customize and make it yours:

You have two files to edit here _(These are the only files you should modify)_.

```bash
edit the variables in _global.scss
edit _fonts.scss and copy your fonts into the fonts folder
import keto.scss into your main.jsx
```

6. Start up your project:

```bash
yarn dev
```

7. Build away 🎉

PostCSS handles everything and you don't have to do any extra configuration.

_You can use `npm or pnpm` too._

<br>

**NOTE: PurgeCSS ensures that only used classes are compiled in the final build.**

**I assume you use Vite.js for all your React project. But the setup is the same for Next.js**

**Always check back for the newest updates. I'm working on creating React components based on the framework that anyone can easily copy and use.**

**Want to contribute? Let me know, please.**
