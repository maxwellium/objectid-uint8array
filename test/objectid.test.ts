import {
  toHexString, toBinaryString,
  create, equals,
  createFromHexString, createFromBinaryString
} from '../src/objectid';


const FIXTURE = new Uint8Array( [ 92, 174, 23, 118, 29, 211, 194, 18, 58, 99, 172, 136 ] );


test( 'toHexString', () => {
  expect(
    toHexString( FIXTURE )
  ).toBe( '5cae17761dd3c2123a63ac88' );
} );

test( 'toBinaryString', () => {
  expect(
    toBinaryString( FIXTURE )
  ).toBe( '\\®\u0017v\u001dÓÂ\u0012:c¬' );
} );

test( 'create uniques', () => {

  const a = create(), b = create();

  expect(
    toHexString( a )
  ).not.toBe( toHexString( b ) );
} );

test( 'equals', () => {
  const a = create(), b = toHexString( a );

  expect(
    equals( a, b )
  ).toBeTruthy();
} );

test( 'roundtrip', () => {

  const a = create(),
    b = toHexString( a ),
    c = toBinaryString( a ),
    d = createFromHexString( b ),
    e = createFromBinaryString( c );

  expect(
    equals( a, d )
  ).toBeTruthy();

  expect(
    equals( a, e )
  ).toBeTruthy();

  expect(
    equals( d, e )
  ).toBeTruthy();
} );
