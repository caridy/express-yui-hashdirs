/*
 * Copyright 2013 Yahoo! Inc. All rights reserved.
 * Copyrights licensed under the BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

'use strict';

var plugin = require('./lib/plugin');

module.exports = {
    yui: function () {
        return plugin;
    }
};
