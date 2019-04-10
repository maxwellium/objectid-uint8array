"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectid_1 = require("../src/objectid");
// import { randomBytes } from 'crypto';
// const globalAny: any = global;
// Object.defineProperty( globalAny, 'crypto', {
//   value: {
//     getRandomValues: ( arr: Uint8Array ) => randomBytes( arr.length ),
//   },
// } );
// globalAny.crypto = {
//   getRandomValues: ( arr: Uint8Array ) => randomBytes( arr.length ),
// };
const FIXTURE = new Uint8Array([92, 174, 23, 118, 29, 211, 194, 18, 58, 99, 172, 136]);
test('toHexString', () => {
    expect(objectid_1.toHexString(FIXTURE)).toBe('5cae17761dd3c2123a63ac88');
});
test('toBinaryString', () => {
    expect(objectid_1.toBinaryString(FIXTURE)).toBe('\\®\u0017v\u001dÓÂ\u0012:c¬');
});
test('create uniques', () => {
    const a = objectid_1.create(), b = objectid_1.create();
    expect(objectid_1.toHexString(a)).not.toBe(objectid_1.toHexString(b));
});
test('equals', () => {
    const a = objectid_1.create(), b = objectid_1.toHexString(a);
    expect(objectid_1.equals(a, b)).toBeTruthy();
});
test('roundtrip', () => {
    const a = objectid_1.create(), b = objectid_1.toHexString(a), c = objectid_1.toBinaryString(a), d = objectid_1.createFromHexString(b), e = objectid_1.createFromBinaryString(c);
    expect(objectid_1.equals(a, d)).toBeTruthy();
    expect(objectid_1.equals(a, e)).toBeTruthy();
    expect(objectid_1.equals(d, e)).toBeTruthy();
});
//# sourceMappingURL=objectid.test.js.map