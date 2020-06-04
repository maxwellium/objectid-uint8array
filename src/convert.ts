import { VALID_HEX_REGEXP } from './utils';


const _fromHexString = (string: string) => new Uint8Array(string.match(/.{2}/g)!.map((h: string) => parseInt(h, 16)));

const _fromBinaryString = (string: string) => new Uint8Array(
  <number[]> Array.prototype.map.call(string, (c: string) => c.charCodeAt(0))
);


export function fromString(string: string) {

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


export function fromHexString(string: string) {

  if ('string' !== typeof string || !VALID_HEX_REGEXP.test(string)) {
    throw 'invalid hex string';
  }

  return _fromHexString(string);
}


export function fromBinaryString(string: string) {

  if ('string' !== typeof string || 12 !== string.length) {
    throw 'invalid binary string';
  }

  return _fromBinaryString(string);
}


export const toHexString = (id: Uint8Array) => id.reduce(
  (s, i) => s + i.toString(16).padStart(2, '0'),
  ''
);


export const toBinaryString = (id: Uint8Array) => id.reduce(
  (s, i) => s + String.fromCharCode(i),
  ''
);
