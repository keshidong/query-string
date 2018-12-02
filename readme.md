# query string parse

[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg)](https://github.com/keshidong/query-string/blob/master/dist/index.js)

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