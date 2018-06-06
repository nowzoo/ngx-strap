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
- edit `projects/your-lib/package.json`. Add the namespace to the `name` field: `@your-org/your-lib`.
- edit `tsconfig.json` in the root directory. In `compilerOptions.paths` change the keys `your-lib` and `your-lib/*` to `@your-org/your-lib` and `@your-org/your-lib/*`. Don't change the values.

### Optional step: add Wallaby support for the new library
- copy `projects/ngx-library-starter/wallaby.js` to `projects/your-lib/wallaby.js`
- copy `projects/ngx-library-starter/tsconfig.wallaby.spec.json` to `projects/your-lib/tsconfig.wallaby.spec.json`
- copy `projects/ngx-library-starter/src/wallabyTest.ts` to `projects/your-lib/src/wallabyTest.ts`
- edit `projects/your-lib/tsconfig.lib.json`. Add `src/wallabyTest.ts` to `exclude`.
- edit the main `wallaby.js` config in the root. Add an alias for the new library in `resolve.alias`: `'your-lib': path.resolve(wallaby.localProjectDir, 'dist/your-lib')`. If you have a namespace, prepend it to the key: `'@your-org/your-lib': path.resolve(wallaby.localProjectDir, 'dist/your-lib')`.
