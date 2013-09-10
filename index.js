/*
 * Copyright 2013 Yahoo! Inc. All rights reserved.
 * Copyrights licensed under the BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

'use strict';

var plugin = require('./lib/plugin');

module.exports = {
    // put locator plugin on "yui" property per express-yui convention
    yui: function () {
        return plugin;
    }
};
