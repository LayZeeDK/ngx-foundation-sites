# Copilot Agent Playbook

## 1. Repository at a Glance

- **Purpose:** Angular component library that re-implements Zurb Foundation for
  Sites UI primitives with modern Angular (v15) and CSS custom properties, plus
  supporting Storybook documentation and Cypress E2E coverage.
- **Workspace Type:** Nx monorepo (`nx.json`) with one primary buildable Angular
  library, two auxiliary Storybook helper libraries, and a Cypress-based E2E
  project.
- **Languages & Tooling:** TypeScript, SCSS, Angular 15, Storybook 6.5, Cypress
  11, Jest via `jest-preset-angular`, ESLint, Prettier. Nx Cloud remote caching
  is enabled.
- **Repo Scale:** ~3000 dependencies after install. Key runtime target is modern
  browsers consuming the published Angular package.

## 2. Environment & Bootstrap (validated 2025-09-26)

- **Node/NPM:** Use Node 18 (`.nvmrc` = `lts/hydrogen`). We ran with Node
  v18.20.8 / npm 10.8.2. `npm install` works despite an `EBADENGINE` warning
  from `yargs-parser@22` (expects Node ≥20); the warning is benign for now.
- **Install:** Always run `npm install` (or `npm ci` in CI) from repo root.
  Postinstall triggers `ngcc`, so expect ~25 s with warm cache. React peer
  warnings from Storybook packages may appear; no action required unless
  upgrading Storybook.
- **Nx Cloud:** Commands may short-circuit via remote cache. If behavior seems
  odd, add `--skip-nx-cache`.
- **Optional but recommended:** `npm install -g @angular/cli` not required; Nx
  handles Angular builds internally.

## 3. Verified Command Matrix

All commands executed from repo root using Node 18; durations include cache hits
noted in parentheses.

| Purpose                       | Command                                 | Preconditions & Notes                                                                                                               | Result                                                                                                                                                           |
| ----------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build Angular package         | `npm run build`                         | Requires dependencies. Invokes `nx build ngx-foundation-sites` (production). Postbuild runs `copyfiles` to copy README into `dist`. | ✅ 2025-09-26 – Hit Nx cache (~2 s). Produces `dist/packages/ngx-foundation-sites`.                                                                              |
| Build Storybook static bundle | `npm run build:storybook`               | Needs build deps; outputs to `dist/storybook/ngx-foundation-sites`.                                                                 | ✅ 2025-09-26 – Fresh build ~1.5 min. Emits asset-size warnings (expected for Storybook) and tsconfig “unused file” warning for `.storybook/main.ts`.            |
| Lint all projects             | `npm run lint`                          | Runs ESLint across all libs/e2e.                                                                                                    | ✅ 2025-09-26 – Nx cache (~1 s).                                                                                                                                 |
| Unit tests                    | `npm test`                              | Runs all project Jest suites.                                                                                                       | ✅ 2025-09-26 – Nx cache (<1 s).                                                                                                                                 |
| Cypress E2E (CI profile)      | `npm run e2e:ci`                        | Launches headless Storybook + Cypress via `nx run ngx-foundation-sites-e2e:e2e:ci`. First execution downloads Cypress binary.       | ✅ 2025-09-26 – Cache for Nx target; Storybook dev server spent ~2 min to compile, Cypress suite ~14 s. No failures.                                             |
| Live Storybook                | `npm start` (alias `npm run storybook`) | Starts dev server on port 4400; long-running process. Stop manually with Ctrl+C.                                                    | ⚠️ Not re-run in this session, but configuration confirmed in `project.json`. Use after install when iterating UI.                                               |
| License whitelisting          | `npm run verify-license-compliance`     | Uses `lisense` against `lisense.json`.                                                                                              | ✅ 2025-09-26 – Reports 5 modules intentionally outside whitelist (`@nrwl/nx-cloud`, two internal Storybook libs, `trim`, `union`). Treat as informational gate. |
| Formatting                    | `npm run format`                        | Runs `nx format:write`.                                                                                                             | ⚠️ Not exercised; use before committing format-heavy changes.                                                                                                    |

**Always execute install → lint/tests/build in that order before submitting
PRs.** For long-running UI tasks, rely on `npm run storybook` and terminate
manually.

## 4. CI & Quality Gates

- `.github/workflows/ci.yml` runs on push/PR: four jobs (Build, Lint, Test, E2E)
  on Ubuntu using Yarn (`yarn build`, etc.). Yarn merely proxies scripts; parity
  with local npm runs is excellent.
- Build job also executes `yarn build:storybook --configuration=ci` and
  `yarn verify-license-compliance`.
- `.github/workflows/copilot-setup-steps.yml` mirrors environment bootstrap
  (checkout → Node via `.nvmrc` → `npm ci`).
- No additional required checks documented, but expect PRs to pass GitHub
  Actions.

## 5. Project Layout Cheat Sheet

- **Root files:** `package.json` (Nx + scripts), `package-lock.json`, `nx.json`,
  `tsconfig.base.json`, `jest.config.ts`, `jest.preset.js`, `.eslintrc.json`,
  `.prettierrc`, `.nvmrc`, `lisense.json`, `README.md` (usage), `LICENSE`.
- **Primary library:** `packages/ngx-foundation-sites/`
  - Source exports in `src/lib/**`; components grouped by feature (card, tabs,
    progress-bar).
  - Storybook config `.storybook/`; entry `src/storybook/styles.scss` sets
    global theme.
  - Jest setup in `src/test-setup.ts`; Angular packaging via `ng-package.json`.
- **Testing helpers:** `packages/ngx-foundation-sites/testing/` (secondary entry
  point).
- **Storybook helper libs:** `packages/storybook/ui-markdown` and `ui-security`,
  each with standard Nx Angular library setup.
- **E2E app:** `packages/ngx-foundation-sites-e2e/` – Cypress specs in
  `src/e2e/tabs/*`, page objects under `src/support/tabs`. Configured to drive
  Storybook stories instead of a standalone app.
- **Tooling:** `.github/actions/setup-dependencies` composite action wrapping
  `npm ci`.

## 6. Tips, Gotchas, and Efficiencies

- **Trust Nx Targets:** Project configs are in each `project.json`. Prefer
  `nx run <project>:<target>` if deviating from npm scripts.
- **Remote Cache Awareness:** If a target unexpectedly reports success without
  running, it likely came from Nx Cloud. Append `--skip-nx-cache` for clean
  reruns when validating performance-sensitive fixes.
- **Storybook Warnings:** Large bundle warnings are normal until components are
  code-split; don’t treat as failures unless size budgets matter.
- **License Gate:** `lisense` command currently flags five packages every time.
  Documented above; expect to justify in PRs but no action needed during routine
  builds.
- **React Peer Warnings:** Storybook pulls lightweight React dependencies for
  docs UI. Ignore unless bumping Storybook; no React code exists in the library
  itself.
- **Node Option Warning in Cypress:** `NODE_OPTIONS` are injected globally
  (`--max-old-space-size=6144`). Cypress logs “Most NODE_OPTIONs are not
  supported”; harmless.
- **SCSS Overrides:** Theming lives in `src/storybook/styles.scss`. Angular
  component theming uses CSS custom properties; watch for specificity hacks like
  `:root:root`.
- **Formatting & Lint:** ESLint enforces module boundaries; avoid cross-library
  imports outside configured paths.

## 7. Working Protocol

1. `nvm use` (or otherwise ensure Node 18) → `npm install`.
2. Implement changes within `packages/**`; update exports in
   `packages/ngx-foundation-sites/src/index.ts` when exposing new APIs.
3. Validate with `npm run lint`, `npm test`, `npm run build`, plus
   `npm run build:storybook` or `npm run e2e:ci` if relevant.
4. Run `npm run verify-license-compliance` when dependencies change.
5. Package outputs land in `dist/**`; clean with
   `nx run-many --target=build --all --skip-nx-cache` if caches get stale.

**Follow this playbook and only fall back to manual searches when you discover
contradictory or missing information.**
