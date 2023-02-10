// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function solution(s) {
  const split = s.split('')
  const l = split.length
  //   if (l % 2 == 0) {
  //     return split[l / 2 - 1] + split[l / 2]
  //   } else {
  //     return split[Math.floor(l / 2)]
  //   }

  return l % 2 == 0 ? split[l / 2 - 1] + split[l / 2] : split[Math.floor(l / 2)]
}

console.log(solution('abcd')) // => bc

console.log(solution('testing')) // => t
