import { multiplesOf3And5 } from './../src/multiples-of-3-and-5.js';

describe('multiples of 3 and 5', () => {

  test('should display all natural numbers from 1 to 1000', () => {
    expect(multiplesOf3And5()).toEqual(true);
  });

});