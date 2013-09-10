### fileUpdated evt keys: [ 'file', 'bundle' ]

    { file:
       { bundleName: 'demo',
         fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express',
         relativePath: '',
         ext: '' },
      bundle:
       { options: {},
         name: 'demo',
         baseDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express',
         type: 'main',
         files: { '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express': true },
         resources: {},
         version: '0.0.1',
         buildDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo' } }

### bundleUpdated log

    % cd ~/Repos/modown/locator-hashdirs/examples/loc-express
    % rm -rf build/demo/{.cache,*}; node app.js
      express:application booting in development mode +0ms
      connect:dispatcher use / query +0ms
      connect:dispatcher use / expressInit +1ms
      express:yui Using yui@3.11.0 from [/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/node_modules/yui] in debug mode. +0ms
      connect:dispatcher use / anonymous +14ms
      connect:dispatcher use / router +0ms
      express:router defined get /bar +0ms
      express:router defined get /foo +0ms
    bundleUpdated evt:
    { files:
       { '': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express',
            relativePath: '',
            ext: '' },
         'README.md': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/README.md',
            relativePath: 'README.md',
            ext: 'md' },
         'app.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/app.js',
            relativePath: 'app.js',
            ext: 'js' },
         binders:
          { bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders',
            relativePath: 'binders',
            ext: '' },
         models:
          { bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/models',
            relativePath: 'models',
            ext: '' },
         'package.json': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/package.json',
            relativePath: 'package.json',
            ext: 'json' },
         templates:
          { bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates',
            relativePath: 'templates',
            ext: '' },
         'binders/index.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders/index.js',
            relativePath: 'binders/index.js',
            ext: 'js' },
         'models/alerts-model.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/models/alerts-model.js',
            relativePath: 'models/alerts-model.js',
            ext: 'js' },
         'templates/bar.handlebars': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/bar.handlebars',
            relativePath: 'templates/bar.handlebars',
            ext: 'handlebars' },
         'templates/foo.micro': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/foo.micro',
            relativePath: 'templates/foo.micro',
            ext: 'micro' },
         'templates/layouts': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/layouts',
            relativePath: 'templates/layouts',
            ext: '' },
         'templates/layouts/index.handlebars': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/layouts/index.handlebars',
            relativePath: 'templates/layouts/index.handlebars',
            ext: 'handlebars' },
         'build/demo/demo-templates-bar.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-bar.js',
            relativePath: 'build/demo/demo-templates-bar.js',
            ext: 'js' },
         'build/demo/demo-templates-foo.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-foo.js',
            relativePath: 'build/demo/demo-templates-foo.js',
            ext: 'js' },
         'build/demo/demo-templates-index.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-index.js',
            relativePath: 'build/demo/demo-templates-index.js',
            ext: 'js' } },
      resources: {},
      bundle:
       { options: {},
         name: 'demo',
         baseDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express',
         type: 'main',
         files:
          { '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/README.md': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/app.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/models': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/package.json': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders/index.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/models/alerts-model.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/bar.handlebars': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/foo.micro': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/layouts': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/layouts/index.handlebars': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-bar.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-foo.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-index.js': true },
         resources: {},
         version: '0.0.1',
         buildDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo',
         useServerModules:
          [ 'demo-templates-bar',
            'demo-templates-foo',
            'demo-templates-index' ] } }

      express:yui:shifter shifting /Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders/index.js +0ms
    shifter [info] revving up
    ...
    shifter [info] finished in 0.028 seconds, pretty fast huh?

    bundleUpdated evt:
    { files:
       { 'build/demo/loader-demo.js': {
            bundleName: 'demo',
            fullPath: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/loader-demo.js',
            relativePath: 'build/demo/loader-demo.js',
            ext: 'js' } },
      resources: {},
      bundle:
       { options: {},
         name: 'demo',
         baseDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express',
         type: 'main',
         files:
          { '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/README.md': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/app.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/models': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/package.json': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/binders/index.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/models/alerts-model.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/bar.handlebars': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/foo.micro': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/layouts': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/templates/layouts/index.handlebars': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-bar.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-foo.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/demo-templates-index.js': true,
            '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo/loader-demo.js': true },
         resources: {},
         version: '0.0.1',
         buildDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo',
         useServerModules:
          [ 'demo-templates-bar',
            'demo-templates-foo',
            'demo-templates-index' ],
         yuiBuildDirectory: '/Users/isao/Repos/modown/locator-hashdirs/examples/loc-express/build/demo' } }

### sample hashsome results

    { 'alerts-model': '/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/alerts-model@569028',
      'binder-index': '/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/binder-index@eba6ac',
      'demo-templates-index': '/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/demo-templates-index@145385',
      'demo-templates-foo': '/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/demo-templates-foo@539f25',
      'demo-templates-bar': '/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/demo-templates-bar@e7ce4a',
      'loader-demo': '/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/loader-demo@c3c4ff' }

### tree -d build

    % tree -d build/
    build/
    └── demo
        ├── alerts-model@569028
        ├── binder-index@eba6ac
        ├── demo-templates-bar@e7ce4a
        ├── demo-templates-foo@539f25
        ├── demo-templates-index@145385
        └── loader-demo@c3c4ff

    7 directories


