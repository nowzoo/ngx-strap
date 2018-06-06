const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra')
const fullLibraryName = process.argv[2];

const libWallabyJs = `
var wallabyWebpack = require('wallaby-webpack');
var path = require('path');

var compilerOptions = Object.assign(
  require('./tsconfig.wallaby.spec.json').compilerOptions);

compilerOptions.module = 'CommonJs';

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'src/wallabyTest.js',
      'src/**/*spec.js'
    ],

    module: {
      rules: [
        {test: /\.css$/, loader: ['raw-loader']},
        {test: /\.html$/, loader: 'raw-loader'},
        {test: /\.ts$/, loader: '@ngtools/webpack', include: /node_modules/, query: {tsConfigPath: 'tsconfig.json'}},
        {test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader']},
        {test: /\.less$/, loaders: ['raw-loader', 'less-loader']},
        {test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader']},
        {test: /\.(jpg|png)$/, loader: 'url-loader?limit=128000'}
      ]
    },

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        path.join(wallaby.projectCacheDir, 'src/lib'),
        path.join(wallaby.projectCacheDir, 'src'),
        path.join(wallaby.localProjectDir, '../../node_modules'),
        'node_modules'
      ]
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
  });

  return {
    files: [
      {pattern: 'src/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false},
      {pattern: 'src/**/*.d.ts', ignore: true},
      {pattern: 'src/**/*spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*spec.ts', load: false},
      {pattern: 'src/**/*e2e-spec.ts', ignore: true}
    ],

    testFramework: 'jasmine',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    middleware: function (app, express) {
      var path = require('path');
      app.use('/favicon.ico', express.static(path.join(__dirname, 'src/favicon.ico')));
      app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
    },

    env: {
      kind: 'electron'
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },
    filesWithNoCoverageCalculated: ['src/*.ts', 'src/**/*.module.ts'],

    debug: true
  };
};
`;

const libWallabyTestTs = `
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
`;
const tsconfigWallabySpecJson = {
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "../../out-tsc/spec",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "types": [
      "jasmine",
      "node"
    ],
    "lib": [
      "dom",
      "es2017"
    ]
  },
  "files": [
    "src/test.ts"
  ],
  "include": [
    "**/*.spec.ts",
    "**/*.d.ts"
  ]
};

let libraryName;
let orgName = null;
const logExamples = () => {
  const scriptName = path.basename(process.argv[1])
  console.log( `Examples:
    ${scriptName} my-lib
    ${scriptName} @my-org/my-lib`);
  console.log();
}
if (! fullLibraryName) {
  console.error( 'Please provide a name for the library!');
  logExamples();
  process.exit(1);
}
const parts = name.split('/');
if (parts.length > 2) {
  console.error( 'I can\'t deal with a complex library name like that!');
  logExamples();
  process.exit(1);
}
if (parts.length === 2) {
  libraryName = parts[1].trim();
  orgName = parts[0].trim();
} else {
  libraryName = parts[0].trim();
}
if (libraryName.length === 0 || orgName.length === 0) {
  console.error( 'Please provide a valid name for the library!');
  logExamples();
  process.exit(1);
}
if (orgName) {
  if (orgName.indexOf('@') !== 0) {
    console.error( 'Please put an @ in front of yor org!');
    logExamples();
    process.exit(1);
  }
}

console.log('Generating library...')
new Promise((resolve, reject) => {
  const child = exec(`ng generate library ${libraryName} --prefix ${libraryName}`);
  child.addListener('error', reject);
  child.addListener('exit', resolve);
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'package.json');
  return fs.readJSON(pathTo);
})
.then(pkg => {
  pkg.name = parts.join('/')
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'package.json');
  return fs.writeJSON(pathTo, pkg, {spaces: '\t'});
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'tsconfig.json');
  return fs.readJSON(pathTo);
})
.then(cfg => {
  const valueRoot = cfg.compilerOptions.paths[libraryName];
  const valueWc = cfg.compilerOptions.paths[libraryName + '/*'];
  delete cfg.compilerOptions.paths[libraryName];
  delete cfg.compilerOptions.paths[libraryName + '/*'];
  cfg.compilerOptions.paths[parts.join('/')] = valueRoot;
  cfg.compilerOptions.paths[parts.join('/') + '/*'] = valueWc;
  const pathTo = path.join(process.cwd(), 'tsconfig.json');
  return fs.writeJSON(pathTo, cfg, {spaces: '\t'});
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'tsconfig.lib.json');
  return fs.readJSON(pathTo);
})
.then((cfg) => {
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'tsconfig.lib.json');
  cfg.exclude.push('src/wallabyTest.ts');
  return fs.writeJSON(pathTo, cfg, {spaces: '\t'});
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'wallaby.js');
  return fs.write(pathTo, libWallabyJs);
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'src',  'wallabyTest.ts');
  return fs.write(pathTo, libWallabyTestTs);
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'projects', libraryName, 'tsconfig.wallaby.spec.json');
  return fs.writeJSON(pathTo, tsconfigWallabySpecJson, {spaces: '\t'});
})
.then(() => {
  const pathTo = path.join(process.cwd(), 'wallaby.libs.json');
  return fs.readJSON(pathTo);
})
.then((libs) => {
  const pathTo = path.join(process.cwd(), 'wallaby.libs.json');
  libs.push(parts.join('/'))
  return fs.writeJSON(pathTo, libs, {spaces: '\t'});
})
