// const generalizedGCD = (n, arr) => {
//     const go = (div=2, result={}, i=0) => {

//         result =  arr.reduce((acc, num, index, arr) => {
//             if (!acc[num]) acc[num] = []
//             if (num%div===0) {
//                 acc[num] = [...acc[num], div]
//                 ++i
//                 if (index===arr.length-1 && arr.length === i) {
//                     acc[`hcf`] = {[div]:i}
//                 } 
//             } 
//             return acc
//         }, {...result})

//         ++div;

//         if (div <= arr[arr.length-1]) return go(div, result)
        
//         return result

//     }
    
//      return Object.keys(go()['hcf'])[0];

// }


const gcd = (x, y) => x ? gcd(y % x, x) : y
//f=(x,y)=>x?f(y%x,x):y;

const greatestCommonFactor = (a) => a.reduce((acc, x) => {
    console.log(acc, x, 'gcd', gcd(acc, x))
    return gcd(acc, x)
})
  

console.log(generalizedGCD(5, [4,2,6,8,10].sort((a,b) => a-b)))
console.log(greatestCommonFactor([4,2,6,8,10]))