"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForHexRegExp = /^[0-9a-f]{24}$/i, PROCESS_UNIQUE = crypto.getRandomValues(new Uint8Array(5));
let index = Math.floor(Math.random() * 0xffffff);
function getInc() {
    return (index = (index + 1) % 0xffffff);
}
exports.getInc = getInc;
function isValid(id) {
    return ((id instanceof Uint8Array || 'string' === typeof id) && id.length === 12) ||
        ('string' === typeof id && checkForHexRegExp.test(id));
}
exports.isValid = isValid;
function create(
/** timestamp in seconds */ time = Math.floor(Date.now() / 1000)) {
    const inc = getInc();
    return new Uint8Array([
        // 4-byte timestamp
        (time >> 24) & 0xff,
        (time >> 16) & 0xff,
        (time >> 8) & 0xff,
        time & 0xff,
        // 5-byte process unique
        ...PROCESS_UNIQUE,
        // 3-byte counter
        (inc >> 16) & 0xff,
        (inc >> 8) & 0xff,
        inc & 0xff
    ]);
}
exports.create = create;
function createFromHexString(string) {
    if (!checkForHexRegExp.test(string)) {
        throw 'invalid hex string';
    }
    return new Uint8Array(string.match(/.{2}/g).map((h) => parseInt(h, 16)));
}
exports.createFromHexString = createFromHexString;
function createFromBinaryString(string) {
    if ('string' !== typeof string || 12 !== string.length) {
        throw 'invalid binary string';
    }
    return new Uint8Array(Array.prototype.map.call(string, (c) => c.charCodeAt(0)));
}
exports.createFromBinaryString = createFromBinaryString;
function toHexString(id) {
    return id.reduce((s, i) => s + i.toString(16).padStart(2, '0'), '');
}
exports.toHexString = toHexString;
function toBinaryString(id) {
    return id.reduce((s, i) => s + String.fromCharCode(i), '');
}
exports.toBinaryString = toBinaryString;
function equals(a, b) {
    if (a instanceof Uint8Array && b instanceof Uint8Array) {
        return a.toString() === b.toString();
    }
    if ('string' === typeof a && 'string' === typeof b) {
        return a === b;
    }
    if ('string' === typeof a) {
        return a.toLowerCase() === toHexString(b);
    }
    if ('string' === typeof b) {
        return b.toLowerCase() === toHexString(a);
    }
    throw 'illegal argument types';
}
exports.equals = equals;
/**
 * @returns {number} timestamp in seconds
*/
function getTime(id) {
    return id[3] | (id[2] << 8) | (id[1] << 16) | (id[0] << 24);
}
exports.getTime = getTime;
function setTime(id, 
/** timestamp in seconds */ time) {
    id[3] = time & 0xff;
    id[2] = (time >> 8) & 0xff;
    id[1] = (time >> 16) & 0xff;
    id[0] = (time >> 24) & 0xff;
}
exports.setTime = setTime;
//# sourceMappingURL=objectid.js.map