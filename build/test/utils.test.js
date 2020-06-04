import { equals, isValid } from '../src/index';
const FIXTURE_VALID_UINT8ARRAY = new Uint8Array([92, 174, 23, 118, 29, 211, 194, 18, 58, 99, 172, 136]);
const FIXTURE_VALID_HEX_STRING = '5cae17761dd3c2123a63ac88';
const FIXTURE_VALID_HEX_STRING_MUTATION = '5cae17761dd3c2123a63ac87';
const FIXTURE_VALID_BINARY_STRING = '\\®\u0017v\u001dÓÂ\u0012:c¬';
const FIXTURE_INVALID = new Uint8Array([92, 174, 23, 118, 29, 211, 194, 18, 58, 99]);
describe('utils isValid', () => {
    it('should detect valid objectIds', () => {
        expect(isValid(FIXTURE_VALID_UINT8ARRAY)).toEqual(true);
        expect(isValid(FIXTURE_VALID_BINARY_STRING)).toEqual(true);
        expect(isValid(FIXTURE_VALID_HEX_STRING)).toBe(true);
    });
    it('should detect invalid objectIds', () => {
        expect(isValid(FIXTURE_INVALID)).toEqual(false);
    });
});
describe('utils equals', () => {
    it('should detect equality of objectIds', () => {
        expect(equals(FIXTURE_VALID_UINT8ARRAY, FIXTURE_VALID_BINARY_STRING)).toEqual(true);
        expect(equals(FIXTURE_VALID_HEX_STRING, FIXTURE_VALID_UINT8ARRAY)).toEqual(true);
        expect(equals(FIXTURE_VALID_BINARY_STRING, FIXTURE_VALID_HEX_STRING)).toEqual(true);
        expect(equals(FIXTURE_VALID_UINT8ARRAY, FIXTURE_VALID_UINT8ARRAY)).toEqual(true);
        expect(equals(FIXTURE_VALID_UINT8ARRAY, FIXTURE_VALID_HEX_STRING_MUTATION)).toEqual(false);
    });
    it('should throw when one of the arguments is maltyped', () => {
        expect(() => equals(FIXTURE_VALID_UINT8ARRAY, 1)).toThrowError('illegal argument types');
    });
});
//# sourceMappingURL=utils.test.js.map