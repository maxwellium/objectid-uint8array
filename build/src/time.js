// timestamp in seconds
export const getTime = (id) => id[3] | (id[2] << 8) | (id[1] << 16) | (id[0] << 24);
export const setTime = (id, 
// timestamp in seconds
time) => id.set([
    (time >> 24) & 0xff,
    (time >> 16) & 0xff,
    (time >> 8) & 0xff,
    time & 0xff,
]);
//# sourceMappingURL=time.js.map