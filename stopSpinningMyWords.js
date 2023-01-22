// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

//'The quick brown fox jumps over the lazy dog.'
// split(' ')
// => ['The','quick','brown','fox','jumps','over','the','lazy''dog']

function spinWords(string) {
  const words = string.split(' ')

  const arr = words.map((word) => {
    if (word.length > 4) {
      return [...word].reverse().join('')
    }
    return word
  })
  return arr.join(' ')
}

spinWords('Hey fellow warriors')
