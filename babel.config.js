'use strict';

module.exports = {
    presets: [
        ['minify', {
            'deadcode': true,
            'removeConsole': true,
            'removeDebugger': true,
            'simplify': true,
        }],
        ['@babel/preset-env', {
            targets: '> 0.2%, not dead',
        }]
    ],
    'comments': false,
};
