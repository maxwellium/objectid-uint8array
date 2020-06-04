import { toHexString, toBinaryString, fromHexString, fromBinaryString, fromString } from '../src/index';
const FIXTURE_UINT8ARRAY = new Uint8Array([92, 174, 23, 118, 29, 211, 194, 18, 58, 99, 172, 136]);
const FIXTURE_HEX_STRING = '5cae17761dd3c2123a63ac88';
const FIXTURE_BINARY_STRING = '\\®\u0017v\u001dÓÂ\u0012:c¬';
describe('to string', () => {
    it('should generate hex string from objectId', () => {
        expect(toHexString(FIXTURE_UINT8ARRAY)).toBe(FIXTURE_HEX_STRING);
    });
    it('should generate binary string from objectId', () => {
        expect(toBinaryString(FIXTURE_UINT8ARRAY)).toBe(FIXTURE_BINARY_STRING);
    });
});
describe('from string', () => {
    it('should generate objectId from valid strings', () => {
        const a = fromHexString(FIXTURE_HEX_STRING), b = fromBinaryString(FIXTURE_BINARY_STRING);
        expect(a.toString()).toBe(b.toString());
    });
    it('should throw when trying to generate from invalid strings', () => {
        expect(() => fromHexString(FIXTURE_HEX_STRING + 'no')).toThrowError('invalid hex string');
        expect(() => fromBinaryString(FIXTURE_BINARY_STRING + 'no')).toThrowError('invalid binary string');
        expect(() => fromString(FIXTURE_BINARY_STRING + 'no')).toThrowError('invalid string format');
        expect(() => fromString(1)).toThrowError('argument is not string');
    });
});
//# sourceMappingURL=convert.test.js.map