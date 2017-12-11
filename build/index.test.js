'use strict';

var _ = require('.');

it('casts various types to string', function () {
    expect(_.cast.str(11)).toBe('');
    expect(_.cast.str('11')).toBe('11');
    expect(_.cast.str(false)).toBe('');
    expect(_.cast.str(0)).toBe('');
    expect(_.cast.str(true)).toBe('');
    expect(_.cast.str(null)).toBe('');
    expect(_.cast.str([0, 'kek'])).toBe('');
    expect(_.cast.str({ a: 'b' })).toBe('');
    expect(_.cast.str({})).toBe('');
    expect(_.cast.str(undefined)).toBe('');
    expect(_.cast.str(NaN)).toBe('');
    expect(_.cast.str(123.45)).toBe('');
    expect(_.cast.str(new Promise(function () {}))).toBe('');
    expect(_.cast.str(new Date())).toBe('');
    expect(_.cast.str(function () {})).toBe('');
});

it('casts various types to string with default values', function () {
    expect(_.cast.str(11, 'lol')).toBe('lol');
    expect(_.cast.str('11', 'lol')).toBe('11');
    expect(_.cast.str(false, 'lol')).toBe('lol');
    expect(_.cast.str(0, 'lol')).toBe('lol');
    expect(_.cast.str(true, 'lol')).toBe('lol');
    expect(_.cast.str(null, 'lol')).toBe('lol');
    expect(_.cast.str([0, 'kek'], 'lol')).toBe('lol');
    expect(_.cast.str({ a: 'b' }, 'lol')).toBe('lol');
    expect(_.cast.str({}, 'lol')).toBe('lol');
    expect(_.cast.str(undefined, 'lol')).toBe('lol');
    expect(_.cast.str(NaN, 'lol')).toBe('lol');
    expect(_.cast.str(123.45, 'lol')).toBe('lol');
    expect(_.cast.str(new Promise(function () {}), 'lol')).toBe('lol');
    expect(_.cast.str(new Date(), 'lol')).toBe('lol');
    expect(_.cast.str(function () {}, 'lol')).toBe('lol');
});

it('casts various types to array', function () {
    expect(_.cast.arr(11)).toEqual([]);
    expect(_.cast.arr('11')).toEqual([]);
    expect(_.cast.arr(false)).toEqual([]);
    expect(_.cast.arr(0)).toEqual([]);
    expect(_.cast.arr(true)).toEqual([]);
    expect(_.cast.arr(null)).toEqual([]);
    expect(_.cast.arr([0, 'kek'])).toEqual([0, 'kek']);
    expect(_.cast.arr({ a: 'b' })).toEqual([]);
    expect(_.cast.arr({})).toEqual([]);
    expect(_.cast.arr(undefined)).toEqual([]);
    expect(_.cast.arr(NaN)).toEqual([]);
    expect(_.cast.arr(123.45)).toEqual([]);
    expect(_.cast.arr(new Promise(function () {}))).toEqual([]);
    expect(_.cast.arr(new Date())).toEqual([]);
    expect(_.cast.arr(function () {})).toEqual([]);
});

it('casts various types to array with default values', function () {
    expect(_.cast.arr(11, [1])).toEqual([1]);
    expect(_.cast.arr('11', [1])).toEqual([1]);
    expect(_.cast.arr(false, [1])).toEqual([1]);
    expect(_.cast.arr(0, [1])).toEqual([1]);
    expect(_.cast.arr(true, [1])).toEqual([1]);
    expect(_.cast.arr(null, [1])).toEqual([1]);
    expect(_.cast.arr([0, 'kek'], [1])).toEqual([0, 'kek']);
    expect(_.cast.arr({ a: 'b' }, [1])).toEqual([1]);
    expect(_.cast.arr({}, [1])).toEqual([1]);
    expect(_.cast.arr(undefined, [1])).toEqual([1]);
    expect(_.cast.arr(NaN, [1])).toEqual([1]);
    expect(_.cast.arr(123.45, [1])).toEqual([1]);
    expect(_.cast.arr(new Promise(function () {}), [1])).toEqual([1]);
    expect(_.cast.arr(new Date(), [1])).toEqual([1]);
    expect(_.cast.arr(function () {}, [1])).toEqual([1]);
});

it('casts various types to object', function () {
    expect(_.cast.obj(11)).toEqual({});
    expect(_.cast.obj('11')).toEqual({});
    expect(_.cast.obj(false)).toEqual({});
    expect(_.cast.obj(0)).toEqual({});
    expect(_.cast.obj(true)).toEqual({});
    expect(_.cast.obj(null)).toEqual({});
    expect(_.cast.obj([0, 'kek'])).toEqual({});
    expect(_.cast.obj({ a: 'b' })).toEqual({ a: 'b' });
    expect(_.cast.obj({})).toEqual({});
    expect(_.cast.obj(undefined)).toEqual({});
    expect(_.cast.obj(NaN)).toEqual({});
    expect(_.cast.obj(123.45)).toEqual({});
    expect(_.cast.obj(new Promise(function () {}))).toEqual({});
    expect(_.cast.obj(new Date())).toEqual({});
    expect(_.cast.obj(function () {})).toEqual({});
});

it('casts various types to object with default values', function () {
    expect(_.cast.obj(11, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj('11', { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(false, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(0, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(true, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(null, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj([0, 'kek'], { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj({ a: 'b' }, { one: 'two' })).toEqual({ a: 'b' });
    expect(_.cast.obj({}, { one: 'two' })).toEqual({});
    expect(_.cast.obj(undefined, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(NaN, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(123.45, { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(new Promise(function () {}), { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(new Date(), { one: 'two' })).toEqual({ one: 'two' });
    expect(_.cast.obj(function () {}, { one: 'two' })).toEqual({ one: 'two' });
});

it('casts various types to integer', function () {
    expect(_.cast.int(11)).toBe(11);
    expect(_.cast.int('11')).toBe(0);
    expect(_.cast.int(false)).toBe(0);
    expect(_.cast.int(0)).toBe(0);
    expect(_.cast.int(true)).toBe(0);
    expect(_.cast.int(null)).toBe(0);
    expect(_.cast.int([0, 'kek'])).toBe(0);
    expect(_.cast.int({ a: 'b' })).toBe(0);
    expect(_.cast.int({})).toBe(0);
    expect(_.cast.int(undefined)).toBe(0);
    expect(_.cast.int(NaN)).toBe(0);
    expect(_.cast.int(123.45)).toBe(0);
    expect(_.cast.int(new Promise(function () {}))).toBe(0);
    expect(_.cast.int(new Date())).toBe(0);
    expect(_.cast.int(function () {})).toBe(0);
});

it('casts various types to integer with default values', function () {
    expect(_.cast.int(11, 100)).toBe(11);
    expect(_.cast.int('11', 100)).toBe(100);
    expect(_.cast.int(false, 100)).toBe(100);
    expect(_.cast.int(0, 100)).toBe(0);
    expect(_.cast.int(true, 100)).toBe(100);
    expect(_.cast.int(null, 100)).toBe(100);
    expect(_.cast.int([0, 'kek'], 100)).toBe(100);
    expect(_.cast.int({ a: 'b' }, 100)).toBe(100);
    expect(_.cast.int({}, 100)).toBe(100);
    expect(_.cast.int(undefined, 100)).toBe(100);
    expect(_.cast.int(NaN, 100)).toBe(100);
    expect(_.cast.int(123.45, 100)).toBe(100);
    expect(_.cast.int(new Promise(function () {}), 100)).toBe(100);
    expect(_.cast.int(new Date(), 100)).toBe(100);
    expect(_.cast.int(function () {}, 100)).toBe(100);
});

it('casts various types to float', function () {
    expect(_.cast.flo(11)).toBe(0);
    expect(_.cast.flo('11')).toBe(0);
    expect(_.cast.flo(false)).toBe(0);
    expect(_.cast.flo(0)).toBe(0);
    expect(_.cast.flo(true)).toBe(0);
    expect(_.cast.flo(null)).toBe(0);
    expect(_.cast.flo([0, 'kek'])).toBe(0);
    expect(_.cast.flo({ a: 'b' })).toBe(0);
    expect(_.cast.flo({})).toBe(0);
    expect(_.cast.flo(undefined)).toBe(0);
    expect(_.cast.flo(NaN)).toBe(0);
    expect(_.cast.flo(123.45)).toBe(123.45);
    expect(_.cast.flo(new Promise(function () {}))).toBe(0);
    expect(_.cast.flo(new Date())).toBe(0);
    expect(_.cast.flo(function () {})).toBe(0);
});

it('casts various types to float with default values', function () {
    expect(_.cast.flo(11, 3.14)).toBe(3.14);
    expect(_.cast.flo('11', 3.14)).toBe(3.14);
    expect(_.cast.flo(false, 3.14)).toBe(3.14);
    expect(_.cast.flo(0, 3.14)).toBe(3.14);
    expect(_.cast.flo(true, 3.14)).toBe(3.14);
    expect(_.cast.flo(null, 3.14)).toBe(3.14);
    expect(_.cast.flo([0, 'kek'], 3.14)).toBe(3.14);
    expect(_.cast.flo({ a: 'b' }, 3.14)).toBe(3.14);
    expect(_.cast.flo({}, 3.14)).toBe(3.14);
    expect(_.cast.flo(undefined, 3.14)).toBe(3.14);
    expect(_.cast.flo(NaN, 3.14)).toBe(3.14);
    expect(_.cast.flo(123.45, 3.14)).toBe(123.45);
    expect(_.cast.flo(new Promise(function () {}), 3.14)).toBe(3.14);
    expect(_.cast.flo(new Date(), 3.14)).toBe(3.14);
    expect(_.cast.flo(function () {}, 3.14)).toBe(3.14);
});

it('casts various types to bolean', function () {
    expect(_.cast.bool(11)).toBe(false);
    expect(_.cast.bool('11')).toBe(false);
    expect(_.cast.bool(false)).toBe(false);
    expect(_.cast.bool(0)).toBe(false);
    expect(_.cast.bool(true)).toBe(true);
    expect(_.cast.bool(null)).toBe(false);
    expect(_.cast.bool([0, 'kek'])).toBe(false);
    expect(_.cast.bool({ a: 'b' })).toBe(false);
    expect(_.cast.bool({})).toBe(false);
    expect(_.cast.bool(undefined)).toBe(false);
    expect(_.cast.bool(NaN)).toBe(false);
    expect(_.cast.bool(123.45)).toBe(false);
    expect(_.cast.bool(new Promise(function () {}))).toBe(false);
    expect(_.cast.bool(new Date())).toBe(false);
    expect(_.cast.bool(function () {})).toBe(false);
});

it('casts various types to bolean with default values', function () {
    expect(_.cast.bool(11, true)).toBe(true);
    expect(_.cast.bool('11', true)).toBe(true);
    expect(_.cast.bool(false, true)).toBe(false);
    expect(_.cast.bool(0, true)).toBe(true);
    expect(_.cast.bool(true, false)).toBe(true);
    expect(_.cast.bool(null, true)).toBe(true);
    expect(_.cast.bool([0, 'kek'], true)).toBe(true);
    expect(_.cast.bool({ a: 'b' }, true)).toBe(true);
    expect(_.cast.bool({}, true)).toBe(true);
    expect(_.cast.bool(undefined, true)).toBe(true);
    expect(_.cast.bool(NaN, true)).toBe(true);
    expect(_.cast.bool(123.45, true)).toBe(true);
    expect(_.cast.bool(new Promise(function () {}), true)).toBe(true);
    expect(_.cast.bool(new Date(), true)).toBe(true);
    expect(_.cast.bool(function () {}, true)).toBe(true);
});