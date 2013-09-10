var path = require('path'),
    groups = require('./groups'),
    hashdirs = require('hashsome').hashdirs;



function prefix(left) {
    return function(right) { return left + right; }; // use with Array.map
}

function rename(modules, basedir) {
    modules.forEach(function (name) {

    });
}

function getModules(modpath) {
    var groupmeta = groups.getGroupConfig(modpath);
    // { moduleName: 'loader-demo',
    //   moduleVersion: '',
    //   moduleConfig: { requires: [ 'loader-base' ] },
    //   groupName: 'demo',
    //   modules:
    //    { 'alerts-model': { group: 'demo', requires: [Object] },
    //      'binder-index': { affinity: 'client', group: 'demo', requires: [Object] },
    //      'demo-templates-bar': { group: 'demo', requires: [Object] },
    //      'demo-templates-foo': { group: 'demo', requires: [Object] },
    //      'demo-templates-index': { group: 'demo', requires: [Object] },
    //      'loader-demo': { affinity: 'client', group: 'demo' } } }
    return groupmeta && groupmeta.modules && Object.keys(groupmeta.modules);
}

/**
 * get the meta-module created by express-yui. It has an evt.bundle.files
 * keyname like:
 *
 *      <build dir>/<bundle build dir>/loader-<bundle name>.js
 *
 * i.e. "build/demo/loader-demo.js"
 */
function getMetaModule(bundle, yuiBuildDir) {
    var fullpath, relpath;

    // yuiBuildDir set by express-yui, not locator
    if (yuiBuildDir && bundle.name && bundle.baseDirectory) {
        fullpath = yuiBuildDir + path.sep + 'loader-' + bundle.name + '.js';
        relpath = path.relative(bundle.baseDirectory, fullpath);
    }

    return relpath;
}

function bundleUpdated(evt, api) {
    var yuibuild = evt.bundle.yuiBuildDirectory,
        key = getMetaModule(evt.bundle, yuibuild),
        meta = evt.files[key],
        dirs,
        promise;

//     if (key && meta) {
//         dirs = getModules(meta.fullPath).map(prefix(yuibuild + path.sep));
//         console.log(dirs);
//         hashdirs(dirs, function(err, results) {
//             console.log(err || results);
//         });
//     }

    return key && meta && api.promise(function rename(resolve, reject) {
        //if (key && meta) {
            dirs = getModules(meta.fullPath).map(prefix(yuibuild + path.sep));
            console.log(dirs);
            hashdirs(dirs, function(err, results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        //}
    });

//    console.log('metaModKey', metaModKey);
//     Object.keys(evt.files).some(function (name) {
//      if ()
//     });

}

module.exports = {
    describe: {
        summary: "Use with express-yui that suffixes client-side bundle sub-directory names with a hash of the contents of some of it's files contents."
    },
    bundleUpdated: bundleUpdated
};


/*

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
*/
