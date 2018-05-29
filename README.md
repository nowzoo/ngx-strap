# AngularLibraryStarter

This is a Angular Library starter built with [Angular CLI](https://github.com/angular/angular-cli)
with some useful changes meant to make it easier to develop both a library and a GitHub-hosted demo site
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

  7. Update or replace LICENSE and README.md (this file).

  8. Create your **real** library with the CLI.

```bash
ng g library your-library-name
```

  9. Update `projects/your-library-name/package.json` with:
      - the `name`, `description`, `keywords`, `repository`, and `license` fields should be the same as what appears in the main `package.json`
      - the library dependencies should probably all be in `peerDependencies`
  10. Make something great.

## Publishing the library

  1. Commit.
```bash
git add -A
git commit -m 'ready to publish'
```
  2. Bump the **library** version using NPM. You want to do this for the library `package.json`, not the main one, so make sure you are in the library directory.
```bash
# make sure you are in the library directory
cd projects/your-library-name
npm version 1.0.0 # or major | minor | patch
# cd back to root
cd ../..
```
  3. Build the library...
```bash
npm run buildLib
# or ng build your-library-name --prod
```

  4. Copy the license and readme into the dist.
```
cp LICENSE dist/your-library-name
cp README.md dist/your-library-name
```

  5. Publish...
```bash
# change to dist/your-library-name
cd dist/your-library-name
# if you are not signed into NPM do...
npm adduser
# publish...
npm publish
```
