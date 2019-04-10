const checkForHexRegExp = /^[0-9a-f]{24}$/i,
  PROCESS_UNIQUE = crypto.getRandomValues( new Uint8Array( 5 ) );

let index = Math.floor( Math.random() * 0xffffff );


function getInc() {
  return ( index = ( index + 1 ) % 0xffffff );
}


function isValid( id: Uint8Array | string ) {
  return ( ( id instanceof Uint8Array || 'string' === typeof id ) && id.length === 12 ) ||
    ( 'string' === typeof id && checkForHexRegExp.test( id ) );
}


function create(
  /** timestamp in seconds */ time: number = Math.floor( Date.now() / 1000 )
) {

  const inc = getInc();

  return new Uint8Array( [
    // 4-byte timestamp
    ( time >> 24 ) & 0xff,
    ( time >> 16 ) & 0xff,
    ( time >> 8 ) & 0xff,
    time & 0xff,
    // 5-byte process unique
    ...PROCESS_UNIQUE,
    // 3-byte counter
    ( inc >> 16 ) & 0xff,
    ( inc >> 8 ) & 0xff,
    inc & 0xff
  ] );
}

function createFromHexString( string: string ) {
  if ( !checkForHexRegExp.test( string ) ) {
    throw 'invalid hex string';
  }

  return new Uint8Array( string.match( /.{2}/g )!.map( ( h: string ) => parseInt( h, 16 ) ) );
}

function createFromBinaryString( string: string ) {

  if ( 'string' !== typeof string || 12 !== string.length ) {
    throw 'invalid binary string';
  }

  return new Uint8Array(
    <number[]> Array.prototype.map.call( string, ( c: string ) => c.charCodeAt( 0 ) )
  );
}


function toHexString( id: Uint8Array ) {
  return id.reduce(
    ( s, i ) => s + i.toString( 16 ).padStart( 2, '0' ),
    ''
  );
}

function toBinaryString( id: Uint8Array ) {
  return id.reduce(
    ( s, i ) => s + String.fromCharCode( i ),
    ''
  );
}



function equals( a: string | Uint8Array, b: string | Uint8Array ) {
  if ( a instanceof Uint8Array && b instanceof Uint8Array ) {
    return a.toString() === b.toString();
  }

  if ( 'string' === typeof a && 'string' === typeof b ) {
    return a === b;
  }

  if ( 'string' === typeof a ) {
    return a.toLowerCase() === toHexString( b as Uint8Array );
  }

  if ( 'string' === typeof b ) {
    return b.toLowerCase() === toHexString( a as Uint8Array );
  }

  throw 'illegal argument types';
}


/**
 * @returns {number} timestamp in seconds
*/
function getTime( id: Uint8Array ) {
  return id[ 3 ] | ( id[ 2 ] << 8 ) | ( id[ 1 ] << 16 ) | ( id[ 0 ] << 24 );
}

function setTime(
  id: Uint8Array,
  /** timestamp in seconds */ time: number
) {
  id[ 3 ] = time & 0xff;
  id[ 2 ] = ( time >> 8 ) & 0xff;
  id[ 1 ] = ( time >> 16 ) & 0xff;
  id[ 0 ] = ( time >> 24 ) & 0xff;
}


export {
  create, createFromBinaryString, createFromHexString,
  equals, getInc, getTime,
  isValid, setTime, toBinaryString,
  toHexString
};