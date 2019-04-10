const { randomBytes } = require( 'crypto' );

global.crypto = {
  getRandomValues: arr => randomBytes( arr.length )
};