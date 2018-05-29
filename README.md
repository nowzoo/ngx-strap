# AngularLibraryStarter

This is a Angular Library starter built with [Angular CLI](https://github.com/angular/angular-cli)
with some useful changes meant to make it easier to develop both a library and a GitHub hosted demo site
simultaneously.

- The default app in `src/app` is the demo site. It is built to `docs` - making it easy to publish on Github.
- A library `my-test-library` has been created in `projects/my-test-library`. You can remove this later.
- Wallaby.js has been set up to test both the demo app and the library. (You don't have to use Wallaby, though.)
- The scripts `buildLib` and `buildDemo` have been added to `package.json`.

## Quick Start

  1. Pick a name for your library. Make sure it does not yet exist on NPM. Changing library names later is not fun.
  2. Clone this repo into `your-library-name`.

```bash
git clone https://github.com/nowzoo/angular-library-starter.git your-library-name
cd your-library-name
```
  3. Install the dependencies.

```bash
npm i
```
  4. (Optional.) Make sure everything works as is. Some things you can do...

```bash
# run the demo app locally
ng serve --open

# Unit tests. The wallaby.js file is set up to test both the lib and the demo.
# If you don't have wallaby...

# run unit tests on the library with ng
ng test my-test-library

# run unit tests on the demo app with ng
ng test my-test-library

# build the library for production
npm run buildLib
# will be built to dist/my-test-library

# build the demo app for production
npm run buildDemo
# will be built to docs
```
  5. Add a repo on GitHub with your library name. Then make it the remote:

```bash
git remote remove origin https://github.com/nowzoo/angular-library-starter.git
git remote add origin git@github.com:your-id/your-library-name.git
```

  6. Update `package.json`.
      - Update the name field to your library name.
      - Update the repository entry, and update keywords and description to reflect what your library will do.
      - Update the `buildLib` script. Replace `my-test-library` in  `"buildLib": "ng build my-test-library --prod"` to your library name.
      -  Update the `buildDemo` script. Replace `angular-library-starter` in `--base-href /angular-library-starter/` with your library name. (The `--base-href` entry tells Angular that your demo site will live in a subdirectory, e.g. `your-id.github.io/your-library-name`.)

  7. Create your **actual** library with the CLI.

```bash
ng g library your-library-name
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
