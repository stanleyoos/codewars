// Given an integral number, determine if it's a square number:

// Examples

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) return true

  return false
}

// The Number.isInteger() static method determines whether the passed value is an integer.

// The Math.sqrt() static method returns the square root of a number
