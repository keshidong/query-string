# query string parse

# [query-string-sp](https://github.com/keshidong/query-string) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![GitHub issues](https://img.shields.io/github/issues/keshidong/query-string.svg)](https://github.com/keshidong/query-string/issues)
[![build status](https://img.shields.io/travis/keshidong/query-string/master.svg?style=flat-square)](https://travis-ci.org/keshidong/query-string)
[![Coverage Status](https://coveralls.io/repos/github/keshidong/query-string/badge.svg?branch=master)](https://coveralls.io/github/keshidong/query-string?branch=master)


Support for parsing and stringify `location.search`  and `location.hash`

## Supported query string parsing

1. `?a`  ---------  `{a: null}`
2. `?a=` --------- `{a: ''}`
3. `?a=1` --------- `{a: '1'}`
4. `?test=%E4%B8%AD%E6%96%87 ` --------- `{test: '中文'}`
5. `?a=1&a=2` --------- `{a: ['1', '2']}`

## usage

1. import package

`yarn add query-string-sp` or `npm install query-string-sp`

2. code...

```javascript
import { queryStringParse } from query-string-sp

// parse location.search
console.log(queryStringParse('?a')) // return {a: null}

```
