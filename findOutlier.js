
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

const findOutlier = (arr) =>
     arr.reduce((acc, num) => {
         if (!acc['num'] && acc['type'] === 'even') {
            acc['num'] = Math.abs(num % 2) > 0 ? num : 0;
         }
         if (!acc['num'] && acc['type'] === 'odd') {
            acc['num'] = Math.abs(num % 2) === 0 ? num : 0;
         }
         return acc
     }, 
        {
            type: arr.filter(int => int % 2).length > arr.filter(int => int % 2 === 0).length ? 'odd' : 'even',
            num: 0
    }
        )['num']

console.log(detector([2, 4, 0, 100, 4, 11, 2602, 36]))//must return 11
console.log(detector([160, 3, 1719, 19, 11, 13, -21])) //must return 160


//elegant
const findOutlier = (
    a,
    is = a.slice(0, 3).reduce((x, y) => x + Math.abs(y % 2), 0) > 1
      ? 0
      : 1,
  ) => a.find(v => Math.abs(v % 2) === is)