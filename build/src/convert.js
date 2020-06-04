import { VALID_HEX_REGEXP } from './utils';
const _fromHexString = (string) => new Uint8Array(string.match(/.{2}/g).map((h) => parseInt(h, 16)));
const _fromBinaryString = (string) => new Uint8Array(Array.prototype.map.call(string, (c) => c.charCodeAt(0)));
export function fromString(string) {
    if ('string' !== typeof string) {
        throw 'argument is not string';
    }
    if (VALID_HEX_REGEXP.test(string)) {
        return _fromHexString(string);
    }
    if (12 === string.length) {
        return _fromBinaryString(string);
    }
    throw 'invalid string format';
}
export function fromHexString(string) {
    if ('string' !== typeof string || !VALID_HEX_REGEXP.test(string)) {
        throw 'invalid hex string';
    }
    return _fromHexString(string);
}
export function fromBinaryString(string) {
    if ('string' !== typeof string || 12 !== string.length) {
        throw 'invalid binary string';
    }
    return _fromBinaryString(string);
}
export const toHexString = (id) => id.reduce((s, i) => s + i.toString(16).padStart(2, '0'), '');
export const toBinaryString = (id) => id.reduce((s, i) => s + String.fromCharCode(i), '');
//# sourceMappingURL=convert.js.map