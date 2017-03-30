import 'react-native';
import getDivestmentTotal from '../src/divestment';
// import XMLHttpRequest from 'xmlhttprequest';

describe('getDivestmentTotal', () => {
  // test('did not rain', () => {
  //   expect(rain()).toBe(0);
  // });
  it('returns a string that looks like a lot of money', (done) => {
    function callback(data) {
      expect(data).toMatch(/\$\d\d,\d\d\d,\d\d\d\.\d\d.*/);
      done();
    }

    getDivestmentTotal(callback);
  });
});
