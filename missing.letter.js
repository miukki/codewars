//https://www.codewars.com/kata/find-the-missing-letter
//missing letter 

const findMissingLetter = (str) => String.fromCharCode(str.reduce(
    (cnt, l, index) => {
        if (cnt) return cnt
        if (str[index+1])
          cnt = l.charCodeAt()+1 === str[index+1].charCodeAt() ? null : l.charCodeAt()+1
        return cnt;
    }, null
  ))

console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))