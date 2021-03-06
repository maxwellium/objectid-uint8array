import { toHexString, fromString } from './convert';


export const VALID_HEX_REGEXP = /^[0-9a-f]{24}$/i;


export const isValid = (id: Uint8Array | string) =>
  (id instanceof Uint8Array && id.length === 12) ||
  ('string' === typeof id && id.length === 12) ||
  ('string' === typeof id && VALID_HEX_REGEXP.test(id));


export function equals(a: string | Uint8Array, b: string | Uint8Array) {

  if ('string' === typeof a) {
    a = fromString(a);
  }

  if ('string' === typeof b) {
    b = fromString(b);
  }

  if (a instanceof Uint8Array && b instanceof Uint8Array) {
    return a.toString() === b.toString();
  }

  throw 'illegal argument types';
}
