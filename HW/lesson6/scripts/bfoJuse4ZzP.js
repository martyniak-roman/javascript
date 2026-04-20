let str = 'Ревуть воли як ясла повні';

const stringToarray = (str) => {
  if (str){
    const split = str.split(' ')
    return split
  }
  return ['']
}

console.log(stringToarray(str))

