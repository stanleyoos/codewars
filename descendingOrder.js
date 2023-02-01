const num = 12345

// console.log(typeof String(num))
// console.log(typeof num)

function descOrder(n) {
  const newArr = String(n)
    .split('')
    .map((n) => Number(n))
    .sort((a, b) => {
      return b - a
    })

  return Number(newArr.join(''))
}

console.log(descOrder(12345))
