import { toHexString, getTime, setTime } from '../src/index';

const FIXTURE = new Uint8Array([ 92, 174, 23, 118, 29, 211, 194, 18, 58, 99, 172, 136 ]);


describe('time functions', () => {

  it('should get timestamp in seconds', () => {
    expect(
      getTime(FIXTURE)
    ).toEqual(1554913142);
  });


  it('should set timestamp in seconds', () => {

    const fixture = new Uint8Array(FIXTURE);

    setTime(fixture, 1590764644);

    expect(
      toHexString(fixture)
    ).toEqual('5ed124641dd3c2123a63ac88');
  });

});
