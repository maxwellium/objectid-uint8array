const PROCESS_UNIQUE = crypto.getRandomValues(new Uint8Array(5));
let index = Math.floor(Math.random() * 0xffffff);
export const getInc = () => (index = (index + 1) % 0xffffff);
export const create = (
// timestamp in seconds
time = Math.floor(Date.now() / 1000), 
// instance incremented counter
inc = getInc()) => new Uint8Array([
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
//# sourceMappingURL=create.js.map