import { queryStringParse } from "../dist/index";

/* 测试用例
  * '?=' return {}
  * '? =' return {}
  * '?===' return {}
  * '?a' return {a: null}
  * '?a=' return {a: ''}
  * '?a=1' return {a: '1'}
  * '?a =1' return {a: '1'}
  * '?a=1&' return {a: '1'}
  * '?a=1&b' return {a: '1', b: null}
  * '?a=1&b=' return {a: '1', b: ''}
  * '?a=1&b=2' return {a: '1', b: '2'}
  * '?a=1&b=====' return {a: '1', b: '===='}
  * '?a=1&a=2' return {a: ['1', '2']}
  * '?a=1&a=2&a' return {a: ['1', '2', null]}
  */

test(`parse {} is {}`, () => {
    expect(queryStringParse({})).toEqual({})
});

test(`parse '?=' is {}`, () => {
    expect(queryStringParse('?=')).toEqual({})
});

test(`parse '? =' is {}`, () => {
    expect(queryStringParse('? =')).toEqual({})
});

test(`parse '?===' is {}`, () => {
    expect(queryStringParse('?===')).toEqual({})
});

test(`parse '?a' is {a: null}`, () => {
    expect(queryStringParse('?a')).toEqual({a: null})
});

test(`parse '?a=' is {a: ''}`, () => {
  expect(queryStringParse('?a=')).toEqual({a: ''})
});

test(`parse '?a=1' is {a: '1'}`, () => {
  expect(queryStringParse('?a=1')).toEqual({a: '1'})
});

test(`parse '?a =1' is {a: '1'}`, () => {
    expect(queryStringParse('?a =1')).toEqual({a: '1'})
});

test(`parse '?a= 1' is {a: '1'}`, () => {
    expect(queryStringParse('?a= 1')).toEqual({a: '1'})
});

test(`parse '?a = 1' is {a: '1'}`, () => {
    expect(queryStringParse('?a = 1')).toEqual({a: '1'})
});

test(`parse '?a=1&' is {a: '1'}`, () => {
    expect(queryStringParse('?a=1&')).toEqual({a: '1'})
});

test(`parse '?a=1&b' is {a: '1', b: null}`, () => {
    expect(queryStringParse('?a=1&b')).toEqual({a: '1', b: null})
});

test(`parse '?a=1&b=' is {a: '1', b: ''}`, () => {
    expect(queryStringParse('?a=1&b=')).toEqual({a: '1', b: ''})
});

test(`parse '?a=1&b=2' is {a: '1', b: '2'}`, () => {
    expect(queryStringParse('?a=1&b=2')).toEqual({a: '1', b: '2'})
});

test(`parse '?a=1&b=2 ' is {a: '1', b: '2'}`, () => {
    expect(queryStringParse('?a=1&b=2 ')).toEqual({a: '1', b: '2'})
});

test(`parse '?a=1&b==' is {a: '1', b: '='}`, () => {
    expect(queryStringParse('?a=1&b==')).toEqual({a: '1', b: '='})
});

test(`parse '?a=1&a=2' is {a: ['1', '2']}`, () => {
    expect(queryStringParse('?a=1&a=2')).toEqual({a: ['1', '2']})
});

test(`parse '?a=1&a=2&a' is {a: ['1', '2', null]}`, () => {
    expect(queryStringParse('?a=1&a=2&a')).toEqual({a: ['1', '2', null]})
});

test(`parse '?a=1&a=2&a ' is {a: ['1', '2', null]}`, () => {
    expect(queryStringParse('?a=1&a=2&a ')).toEqual({a: ['1', '2', null]})
});
