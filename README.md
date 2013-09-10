# express-yui-hashdirs

This is a (wip) [Locator](https://github.com/yahoo/locator) plugin for use with [Express-YUI](https://github.com/yahoo/express-yui). It renames bundle build directories that were processed by Express-YUI. The directories that it processes are based on the client-side "meta-module" YUI Loader metadata.

It's purpose is to support hashed URLs for content-based versioning at the sub-bundle level.

### todo
- invoke locator's plugin `fileUpdated` (and `fileDeleted`?) api
- return a valid promise

ignore the stuff below, just wip dumps

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

### bundleUpdated log 1

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

### bundleUpdated log 2

    % cd ~/Repos/modown/locator-hashdirs/examples/loc-express
    % rm -rfv build/demo/{.cache,*} ; node app.js ; tree -d build
    build/demo/.cache/00cd9dd6b1882741dd93928797caaa32
    build/demo/.cache/22a7ea606a008197f54347cd8fece44a
    build/demo/.cache/5ae62400e4c28a005eb17d58e148d49a
    build/demo/.cache/7753e9eb2168b76118333934dd438b6f
    build/demo/.cache/a9bc1d9d72837d05476d4dba5c4160f2
    build/demo/.cache/e11728abae99f4f1da951c2f4ab1da85
    build/demo/.cache
    build/demo/APITEST
    build/demo/alerts-model@569028/alerts-model-debug.js
    build/demo/alerts-model@569028/alerts-model-min.js
    build/demo/alerts-model@569028/alerts-model.js
    build/demo/alerts-model@569028
    build/demo/binder-index@eba6ac/binder-index-debug.js
    build/demo/binder-index@eba6ac/binder-index-min.js
    build/demo/binder-index@eba6ac/binder-index.js
    build/demo/binder-index@eba6ac
    build/demo/demo-templates-bar.js
    build/demo/demo-templates-bar@e7ce4a/demo-templates-bar-debug.js
    build/demo/demo-templates-bar@e7ce4a/demo-templates-bar-min.js
    build/demo/demo-templates-bar@e7ce4a/demo-templates-bar.js
    build/demo/demo-templates-bar@e7ce4a
    build/demo/demo-templates-foo.js
    build/demo/demo-templates-foo@539f25/demo-templates-foo-debug.js
    build/demo/demo-templates-foo@539f25/demo-templates-foo-min.js
    build/demo/demo-templates-foo@539f25/demo-templates-foo.js
    build/demo/demo-templates-foo@539f25
    build/demo/demo-templates-index.js
    build/demo/demo-templates-index@145385/demo-templates-index-debug.js
    build/demo/demo-templates-index@145385/demo-templates-index-min.js
    build/demo/demo-templates-index@145385/demo-templates-index.js
    build/demo/demo-templates-index@145385
    build/demo/loader-demo.js
    build/demo/loader-demo@c3c4ff/loader-demo-debug.js
    build/demo/loader-demo@c3c4ff/loader-demo-min.js
    build/demo/loader-demo@c3c4ff/loader-demo.js
    build/demo/loader-demo@c3c4ff
      express:application booting in development mode +0ms
      connect:dispatcher use / query +0ms
      connect:dispatcher use / expressInit +0ms
      express:yui Using yui@3.11.0 from [/Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/node_modules/yui] in debug mode. +0ms
      connect:dispatcher use / anonymous +10ms
      connect:dispatcher use / router +0ms
      express:router defined get /bar +0ms
      express:router defined get /foo +0ms
    * * bundleUpdated files: [ '',
      'README.md',
      'app.js',
      'binders',
      'models',
      'package.json',
      'templates',
      'binders/index.js',
      'models/alerts-model.js',
      'templates/bar.handlebars',
      'templates/foo.micro',
      'templates/layouts',
      'templates/layouts/index.handlebars',
      'build/demo/demo-templates-bar.js',
      'build/demo/demo-templates-foo.js',
      'build/demo/demo-templates-index.js' ]
      express:yui:shifter shifting /Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/binders/index.js +0ms
    shifter [info] revving up
    shifter [info] looking for index.js file
    shifter [info] found index.js file, shifting
    shifter [info] putting the hammer down
    shifter [info] shifting into gear for binder-index
    shifter [warn] skipping jshint, you better be linting your stuff with something!
    shifter [queu] writing RAW file
    shifter [queu] compressing binder-index/binder-index.js with UglifyJS
    shifter [queu] writing -min file
    shifter [warn] skipping coverage file from config
    shifter [info] done racing, the gears are toast
    shifter [info] finished in 0.027 seconds, pretty fast huh?
      express:yui:shifter shifting /Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/demo-templates-bar.js +372ms
    shifter [info] revving up
    shifter [info] looking for demo-templates-bar.js file
    shifter [info] found demo-templates-bar.js file, shifting
    shifter [info] putting the hammer down
    shifter [info] shifting into gear for demo-templates-bar
    shifter [warn] skipping jshint, you better be linting your stuff with something!
    shifter [queu] writing RAW file
    shifter [queu] compressing demo-templates-bar/demo-templates-bar.js with UglifyJS
    shifter [queu] writing -min file
    shifter [warn] skipping coverage file from config
    shifter [info] done racing, the gears are toast
    shifter [info] finished in 0.035 seconds, pretty fast huh?
      express:yui:shifter shifting /Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/demo-templates-foo.js +377ms
    shifter [info] revving up
    shifter [info] looking for demo-templates-foo.js file
    shifter [info] found demo-templates-foo.js file, shifting
    shifter [info] putting the hammer down
    shifter [info] shifting into gear for demo-templates-foo
    shifter [warn] skipping jshint, you better be linting your stuff with something!
    shifter [queu] writing RAW file
    shifter [queu] compressing demo-templates-foo/demo-templates-foo.js with UglifyJS
    shifter [queu] writing -min file
    shifter [warn] skipping coverage file from config
    shifter [info] done racing, the gears are toast
    shifter [info] finished in 0.031 seconds, pretty fast huh?
      express:yui:shifter shifting /Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/demo-templates-index.js +378ms
    shifter [info] revving up
    shifter [info] looking for demo-templates-index.js file
    shifter [info] found demo-templates-index.js file, shifting
    shifter [info] putting the hammer down
    shifter [info] shifting into gear for demo-templates-index
    shifter [warn] skipping jshint, you better be linting your stuff with something!
    shifter [queu] writing RAW file
    shifter [queu] compressing demo-templates-index/demo-templates-index.js with UglifyJS
    shifter [queu] writing -min file
    shifter [warn] skipping coverage file from config
    shifter [info] done racing, the gears are toast
    shifter [info] finished in 0.044 seconds, pretty fast huh?
      express:yui:shifter shifting /Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/models/alerts-model.js +396ms
    shifter [info] revving up
    shifter [info] looking for alerts-model.js file
    shifter [info] found alerts-model.js file, shifting
    shifter [info] putting the hammer down
    shifter [info] shifting into gear for alerts-model
    shifter [warn] skipping jshint, you better be linting your stuff with something!
    shifter [queu] writing RAW file
    shifter [queu] compressing alerts-model/alerts-model.js with UglifyJS
    shifter [queu] writing -min file
    shifter [warn] skipping coverage file from config
    shifter [info] done racing, the gears are toast
    shifter [info] finished in 0.025 seconds, pretty fast huh?
      express:yui:shifter shifting /Users/isao/Repos/modown/express-yui-hashdirs/examples/loc-express/build/demo/loader-demo.js +374ms
    shifter [info] revving up
    shifter [info] looking for loader-demo.js file
    shifter [info] found loader-demo.js file, shifting
    shifter [info] putting the hammer down
    shifter [info] shifting into gear for loader-demo
    shifter [warn] skipping jshint, you better be linting your stuff with something!
    shifter [queu] writing RAW file
    shifter [queu] compressing loader-demo/loader-demo.js with UglifyJS
    shifter [queu] writing -min file
    shifter [warn] skipping coverage file from config
    shifter [info] done racing, the gears are toast
    shifter [info] finished in 0.029 seconds, pretty fast huh?
    * * bundleUpdated files: [ 'build/demo/loader-demo.js' ]
    * * bundleUpdated files: [ 'build/demo/loader-demo.json' ]
    build
    └── demo
        ├── alerts-model@569028
        ├── binder-index@eba6ac
        ├── demo-templates-bar@e7ce4a
        ├── demo-templates-foo@539f25
        ├── demo-templates-index@145385
        └── loader-demo@c3c4ff

    7 directories

### data returned by require('./lib/groups').getGroupConfig(modpath)

this is extracted out of the the meta-module `build/demo/loader-demo.js`, where `modpath` is the path to that js file

    {
      "moduleName": "loader-demo",
      "moduleVersion": "",
      "moduleConfig": {
        "requires": [
          "loader-base"
        ]
      },
      "groupName": "demo",
      "modules": {
        "alerts-model": {
          "group": "demo",
          "requires": [
            "model"
          ]
        },
        "binder-index": {
          "affinity": "client",
          "group": "demo",
          "requires": [
            "node",
            "demo-templates-foo"
          ]
        },
        "demo-templates-bar": {
          "group": "demo",
          "requires": [
            "handlebars-base"
          ]
        },
        "demo-templates-foo": {
          "group": "demo",
          "requires": [
            "template-micro"
          ]
        },
        "demo-templates-index": {
          "group": "demo",
          "requires": [
            "handlebars-base"
          ]
        },
        "loader-demo": {
          "affinity": "client",
          "group": "demo"
        }
      }
    }

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


