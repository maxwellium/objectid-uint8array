import { create } from '../src/index';
describe('create method', () => {
    it('should create uniques', () => {
        const a = create(), b = create();
        expect(a.toString()).not.toBe(b.toString());
    });
});
//# sourceMappingURL=create.test.js.map