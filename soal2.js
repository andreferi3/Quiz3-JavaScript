const words = ['bat', 'code', 'cat', 'act', 'cab', 'crazy', 'tac'];

function alfabethize(word) {
  if(!word) {
    return
  }

  word = word.split('').sort().join('')
  return word
}

function anagramGrouper(words) {
  const anagram = {}
  words.forEach((word) => {
    const sortedWord = alfabethize(word)
    if(anagram[sortedWord]) {
      return anagram[sortedWord].push(word)
    }
    anagram[sortedWord] = [word]
  })

  return anagram
}

const groupedAnagrams = anagramGrouper(words);

for(const sortedWord in groupedAnagrams){
    console.log(groupedAnagrams[sortedWord].toString());
}