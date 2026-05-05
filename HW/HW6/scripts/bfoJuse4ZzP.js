let str = 'Ревуть воли як ясла повні';

const stringToArray = (str) => {
  if (str){
    const result = str.split(' ')
    return result
  }
  return ['']
}

console.log(stringToArray(str))

