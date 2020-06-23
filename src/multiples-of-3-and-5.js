export const multiplesOf3And5 = function() {
  for (let i = 1; i <= 1000; i++) {
    // console.log(i);
    if (i === 1000) {
      return true;
    }
  }
  return false;
};