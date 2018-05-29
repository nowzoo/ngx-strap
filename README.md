# AngularLibraryStarter

This is a Angular Library starter built with [Angular CLI](https://github.com/angular/angular-cli)
with some useful changes meant to make it easier to develop both a library and a GitHub hosted demo site
simultaneously.

- The default app in `src/app` is the demo site. It is built to `docs` - making it easy to publish on Github.
- A library `my-test-library` has been created in `projects/my-test-library`.
- Wallaby.js has been set up to test both the demo app and the library.
- The scripts `buildLib` and `buildDemo` have been added to `package.json`.

## Quick Start

  1. Pick a name for your library. Make sure it does not yet exist on NPM. Changing library names later is not fun.
  2. Clone this repo into `your-library-name`

```bash
git clone nowzoo/angular-library-starter your-library-name
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
