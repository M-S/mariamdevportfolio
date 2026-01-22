# mariamdevportfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Sandbox development (Dev Container)

A ready-to-use sandbox for local development is provided via VS Code Dev Containers (works locally with Docker or in GitHub Codespaces).

Prerequisites:
- Docker Desktop or Docker Engine
- Visual Studio Code with the "Dev Containers" extension (ms-vscode-remote.remote-containers), or use GitHub Codespaces

How to use locally:
1. Open this repository folder in VS Code.
2. When prompted, "Reopen in Container"; or run the command: Dev Containers: Reopen in Container.
3. The container will build and automatically run `npm ci` as defined in `.devcontainer/devcontainer.json`.
4. Start the dev server inside the container terminal:
   - `npm run dev` (Vite serves on port 5173; it is forwarded automatically)
5. Optional: preview the production build inside the container:
   - `npm run build`
   - `npm run preview` (port 4173 is forwarded)

Notes:
- The container includes useful VS Code extensions (Volar, ESLint, Prettier) and forwards ports 5173 and 4173.
- Node 18 is used to match the CI workflow and ensure parity with GitHub Pages builds.
- Your local npm cache is mounted in the container for faster installs.
