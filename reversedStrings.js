// Complete the solution so that it reverses the string passed into it.

// [...str]
// 'abcdefgh' => ['a', 'b', 'c','d', 'e', 'f','g', 'h']

// .reverse()

// .join('')

function solution(str) {
  return [...str].reverse().join('')
}

console.log(solution('abcdefgh'))
