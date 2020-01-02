# prettier-plugin-csssort

[![License](https://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![npm version](https://badge.fury.io/js/prettier-plugin-csssort.svg)](https://badge.fury.io/js/prettier-plugin-csssort)

A Prettier plugin that sorts and groups CSS properties.

## Installation
Prettier plugins are automatically loaded if installed in the same `node_modules` directory as Prettier itself is installed.

[Read more about Prettier plugins](https://prettier.io/docs/en/next/plugins.html).

## FAQ
1. How are the properties sorted/grouped?

    [lib/config.js](./lib/config.js) defines how properties are sorted and grouped. The configuration was inherited from [CSSComb](https://www.npmjs.com/package/csscomb).

2. Can I change the way properties are sorted/grouped?

    Not at this moment. Feel free to open a pull-request.
