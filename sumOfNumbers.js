// Given two integers a and b, which can be positive or negative,
//find the sum of all the integers between and including them and return it.
//If the two numbers are equal return a or b.

// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Gauss Summation

function getSum(a, b) {
  const max = Math.max(a, b)
  const min = Math.min(a, b)

  // number of pairs = max - min + 1
  // sum of each pair = max + min

  return ((max + min) * (max - min + 1)) / 2
}
