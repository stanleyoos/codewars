//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  const obj = {}

  for (let element of arr) {
    if (obj[element]) obj[element]++
    else {
      obj[element] = 1
    }
  }
  for (key in obj) {
    if (obj[key] % 2 !== 0) return key
  }
}

console.log(findOdd([2, 2, 5, 5, 6, 6, 7]))
// 7
