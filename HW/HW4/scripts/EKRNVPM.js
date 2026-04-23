function sum(arr) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i]
  }
  return res
}

console.log(sum([1,3,5]))
console.log(sum([1,20,10]))