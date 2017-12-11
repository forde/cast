const isString = v => typeof v === 'string'
const isArray = v => v && v.constructor === Array
const isObject = v => v && v.constructor !== Array && v === Object(v) && typeof v !== 'function' && v instanceof Promise === false && v instanceof Date === false
const isInteger = v => Number(v) === v && v % 1 === 0
const isFloat = v => Number(v) === v && v % 1 !== 0
const isBoolean = v => typeof v === 'boolean'

export const cast = {
    str: (v, d) => isString(v) ? v : d || '',
    arr: (v, d) => isArray(v) ? v : d || [],
    obj: (v, d) => isObject(v) ? v : d || {},
    int: (v, d) => isInteger(v) ? v : d || 0,
    flo: (v, d) => isFloat(v) ? v : d || 0,
    bool: (v, d) => isBoolean(v) ? v : d || false,
}