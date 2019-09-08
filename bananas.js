// input 
// apples, pears # and bananas
// grapes
// bananas !apples


// output
// apples, pears
// grapes
// bananas

const solution = (s, d) => {
  return s.split(`\n`).map(v => v.split(new RegExp(`[${d.join(``)}]`))[0].trim()).join('\n')
}