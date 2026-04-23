function arrayMinValue(array) {
    let min = array[0]
    for (const number of array) {
        if (number < min) {
            min = number
        }
    }
    return min
}

console.log(arrayMinValue([5,10,23,55,1,4,25]))