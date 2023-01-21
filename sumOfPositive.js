// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let sum = 0

  arr.forEach((number) => {
    if (number > 0) sum += number
  })

  return sum
}
