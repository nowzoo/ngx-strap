# AngularLibraryStarter

This is an Angular library starter built with [Angular CLI](https://github.com/angular/angular-cli).

Included are some useful changes meant to make it easier to simultaneously develop an Angular library and a GitHub-hosted demo site for that library.

- The default app in `src/app` is the demo site. It is built to `docs` - making it easy to publish on Github.
- There's a sample library, `@nowzoo/ngx-library-starter`, in `projects/ngx-library-starter`.
- Wallaby has been set up to test the library. (You don't have to use Wallaby, though.)

## Quick Start


```bash
# clone this repo into your-library-name
git clone https://github.com/nowzoo/ngx-library-starter.git your-repo-name
cd your-library-name
# install the deps...
npm i
# build the sample library...
ng build ngx-library-starter
# run the demo app
ng serve --open
```

## Adding a real library
Generate...

```bash
ng g library your-lib --prefix your-lib
```
### Optional step: add your NPM org namespace ...
Edit `projects/your-lib/package.json`. Add the namespace to the `name` field:
```json
{
  "name": "@your-org/your-lib",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0"
  }
}
```
Edit `tsconfig.json` in the root directory. Under `compilerOptions.paths` change the keys from...

```js
{

  "paths": {
    "your-lib": [
      "dist/your-lib"
    ],
    "your-lib/*": [
      "dist/your-lib/*"
    ]
  }
}
```
...to...
```js
{

  "paths": {
    "@your-org/your-lib": [
      "dist/your-lib"
    ],
    "@your-org/your-lib/*": [
      "dist/your-lib/*"
    ]
  }
}
```


### Optional step: add Wallaby support for the new library

#### Copy the library Wallaby files to the new library...
```bash
# the wallaby.js
cp projects/ngx-library-starter/wallaby.js projects/your-lib/

# the wallaby-specific tsconfig for the library...
cp projects/ngx-library-starter/tsconfig.wallaby.spec.json projects/your-lib/

# wallabyTest.ts
cp projects/ngx-library-starter/src/wallabyTest.ts projects/your-lib/src/
```

#### Exclude `wallabyTest.ts` from `tsconfig.lib.json`
In `projects/your-lib/tsconfig.lib.json`...
```js
{
  // ... other stuff...
  "exclude": [
    "src/test.ts",
    "src/wallabyTest.ts",
    "**/*.spec.ts"
  ]
}

```
- copy `projects/ngx-library-starter/wallaby.js` to `projects/your-lib/wallaby.js`
- copy `projects/ngx-library-starter/tsconfig.wallaby.spec.json` to `projects/your-lib/tsconfig.wallaby.spec.json`
- copy `projects/ngx-library-starter/src/wallabyTest.ts` to `projects/your-lib/src/wallabyTest.ts`
- edit `projects/your-lib/tsconfig.lib.json`. Add `src/wallabyTest.ts` to `exclude`.


#### Add an alias for the new library to the main `wallaby.js`
If your demo app uses the library, you may want to add an alias in the main `wallaby.js` config. In the config you pass to `wallabyWebpack()`, add an entry to `resolve.alias`:

```js
var webpackPostprocessor = wallabyWebpack({
  // other stuff...
  resolve: {
    //other stuff...
    alias: {
      '@nowzoo/ngx-library-starter': path.resolve(wallaby.localProjectDir,  'dist', 'ngx-library-starter'),
      // add...
      'your-lib': path.resolve(wallaby.localProjectDir, 'dist', 'your-lib'),
      // or with an NPM org...
      '@your-org/your-lib': path.resolve(wallaby.localProjectDir, 'dist', 'your-lib')
    }
    // other stuff
  }
});

```
