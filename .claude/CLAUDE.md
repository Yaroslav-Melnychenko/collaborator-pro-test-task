# Project guidelines

Small React 19 + webpack 5 app. Keep changes minimal and focused on the task at hand.

## Stack

- React 19, function components and hooks only. No class components.
- JSX uses the automatic runtime, so there is no need to import `React` just for JSX.
- webpack 5 with Babel (`@babel/preset-env`, `@babel/preset-react`). No TypeScript.
- Plain CSS in `src/styles.css`. No CSS-in-JS, CSS modules or preprocessors.

## Code style

- 2-space indentation, single quotes, semicolons.
- One component per file, PascalCase file name (`Dropdown.jsx`), default export.
- Destructure props in the function signature.
- Inline arrow functions are fine for short event handlers; extract a named function once a handler grows past a few lines.
- Prefer `const`; never use `var`.
- Do not add new dependencies without a clear reason.

## Commits

- One fix per commit, small and focused.
- Commit message format:

```
edit: <short description of what was fixed>

Проблема: <what was wrong and how it showed up>
Час: <minutes spent on this fix>
Компроміси: <what was intentionally left out or simplified, and why; "немає" if none>
```

- Write the description fields in Ukrainian.

## CSS

- Class names in kebab-case (`.card-description`, `.dropdown-menu`).
- Native CSS nesting (`&`) is allowed.
- Reuse the existing colors (`#1e3a5f`, `#ffd43b`); do not introduce a new palette.
- Avoid `!important`.

## Build

- `npm start` runs the dev server on port 8080.
- `npm run build` writes a production build to `dist/`.
- Do not commit `dist/` or `node_modules/`.

## General

- Do not reformat code you are not changing.
- Keep the existing file structure in `src/`.
