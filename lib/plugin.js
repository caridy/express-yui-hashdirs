/*
 * Copyright 2013 Yahoo! Inc. All rights reserved.
 * Copyrights licensed under the BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

'use strict';

var path = require('path'),
    groups = require('./groups'),
    hashdirs = require('hashsome').hashdirs;


function prefix(left) {
    return function(right) { return left + right; }; // use with Array.map
}

function getModules(modpath) {
    var groupmeta = groups.getGroupConfig(modpath);
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
        meta = evt.files[key];

    return key && meta && api.promise(function rename(resolve, reject) {
        var dirs = getModules(meta.fullPath).map(prefix(yuibuild + path.sep));
        hashdirs(dirs, function(err, results) {
            if (err) {
                reject(err);
            } else {
                console.log(results);
                resolve(results);
            }
        });
    });

}

module.exports = {
    describe: {
        summary: require('../package.json').description
    },
    bundleUpdated: bundleUpdated
};
