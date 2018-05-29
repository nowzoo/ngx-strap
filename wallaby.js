var wallabyWebpack = require('wallaby-webpack');
var path = require('path');

var compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions,
  require('./src/tsconfig.spec.json').compilerOptions);

compilerOptions.module = 'CommonJs';

// To include a project library LIBRARYNAME in tests
// add entries in the places noted below 

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'src/wallabyTest.js',
      'src/**/*spec.js',

      // for each project library add an entry...
      // 'projects/LIBRARYNAME/src/lib/**/*spec.js'...
      'projects/my-test-library/src/lib/**/*spec.js'
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
        path.join(wallaby.projectCacheDir, 'src/app'),
        path.join(wallaby.projectCacheDir, 'src'),
        // for each project library add an entry...
        // path.join(wallaby.projectCacheDir, 'projects/LIBRARYNAME/src/lib')
        path.join(wallaby.projectCacheDir, 'projects/my-test-library/src/lib'),
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
      {pattern: 'src/**/*spec.ts', ignore: true},

      // for each project library add these 3 entries...
      //  {pattern: 'projects/LIBRARYNAME/src/lib/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false},
      //  {pattern: 'projects/LIBRARYNAME/src/lib/**/*.d.ts', ignore: true},
      //  {pattern: 'projects/LIBRARYNAME/src/lib/**/*spec.ts', ignore: true}
      {pattern: 'projects/my-test-library/src/lib/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false},
      {pattern: 'projects/my-test-library/src/lib/**/*.d.ts', ignore: true},
      {pattern: 'projects/my-test-library/src/lib/**/*spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*spec.ts', load: false},
      {pattern: 'src/**/*e2e-spec.ts', ignore: true},

      // for each project library add these 2 entries...
      //  {pattern: 'projects/LIBRARYNAME/src/lib/**/*spec.ts', load: false},
      //  {pattern: 'projects/LIBRARYNAME/src/lib/**/*e2e-spec.ts', ignore: true}
      {pattern: 'projects/my-test-library/src/lib/**/*spec.ts', load: false},
      {pattern: 'projects/my-test-library/src/lib/**/*e2e-spec.ts', ignore: true}
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

    debug: true
  };
};
