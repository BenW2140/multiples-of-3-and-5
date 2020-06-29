import { multiplesOf3And5 } from './../src/multiples-of-3-and-5.js';

describe('multiples of 3 and 5', () => {

  test('should return the sum of all natural numbers from 1 to 1000', () => {
    expect(multiplesOf3And5()).toEqual(500500);
  });

  test('should return the sum of multiples of 5 from 1 to 1000', () => {
    expect(multiplesOf3And5()).toEqual(100500);
  });

  test('should return the sum of multiples of 3 and 5 from 1 to 1000', () => {
    expect(multiplesOf3And5()).toEqual(234168);
  });

});