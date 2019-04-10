declare function getInc(): number;
declare function isValid(id: Uint8Array | string): boolean;
declare function create(
/** timestamp in seconds */ time?: number): Uint8Array;
declare function createFromHexString(string: string): Uint8Array;
declare function createFromBinaryString(string: string): Uint8Array;
declare function toHexString(id: Uint8Array): string;
declare function toBinaryString(id: Uint8Array): string;
declare function equals(a: string | Uint8Array, b: string | Uint8Array): boolean;
/**
 * @returns {number} timestamp in seconds
*/
declare function getTime(id: Uint8Array): number;
declare function setTime(id: Uint8Array, 
/** timestamp in seconds */ time: number): void;
export { create, createFromBinaryString, createFromHexString, equals, getInc, getTime, isValid, setTime, toBinaryString, toHexString };
