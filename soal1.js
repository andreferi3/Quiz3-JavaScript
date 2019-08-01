var input = 'hot bot'
var str = input.split(' ')
console.log(str)

var firstArr = str[0]
var scndArr = str[1]

var dictionary = ["hot", "dot", "dog", "lot", "log"]
var found = ''
found = dictionary.find((element) => {
  return element == firstArr
})

if(found !== undefined) {
  console.log('halooo')
  console.log(found)
  var check = firstArr.substring(0,1)
  if(check) {
    console.log(dictionary)
  }
} else {
  console.log('masukk')
  var check = firstArr.substring(0,1)
  if(check == 'h') {
    dictionary.splice(0,1, firstArr)
    dictionary.splice(3,4, scndArr)
    console.log(dictionary)
  } else {
    console.log('Tak dapat di transformasi')
  }
}