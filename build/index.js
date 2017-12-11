'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isString = function isString(v) {
    return typeof v === 'string';
};
var isArray = function isArray(v) {
    return v && v.constructor === Array;
};
var isObject = function isObject(v) {
    return v && v.constructor !== Array && v === Object(v) && typeof v !== 'function' && v instanceof Promise === false && v instanceof Date === false;
};
var isInteger = function isInteger(v) {
    return Number(v) === v && v % 1 === 0;
};
var isFloat = function isFloat(v) {
    return Number(v) === v && v % 1 !== 0;
};
var isBoolean = function isBoolean(v) {
    return typeof v === 'boolean';
};

var cast = exports.cast = {
    str: function str(v, d) {
        return isString(v) ? v : d || '';
    },
    arr: function arr(v, d) {
        return isArray(v) ? v : d || [];
    },
    obj: function obj(v, d) {
        return isObject(v) ? v : d || {};
    },
    int: function int(v, d) {
        return isInteger(v) ? v : d || 0;
    },
    flo: function flo(v, d) {
        return isFloat(v) ? v : d || 0;
    },
    bool: function bool(v, d) {
        return isBoolean(v) ? v : d || false;
    }
};