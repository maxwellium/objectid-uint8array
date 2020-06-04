// timestamp in seconds
export const getTime = (id: Uint8Array) => id[ 3 ] | (id[ 2 ] << 8) | (id[ 1 ] << 16) | (id[ 0 ] << 24);

export const setTime = (
  id: Uint8Array,
  // timestamp in seconds
  time: number
) => id.set([
  (time >> 24) & 0xff,
  (time >> 16) & 0xff,
  (time >> 8) & 0xff,
  time & 0xff,
]);
