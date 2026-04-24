//TODO: *Через Array.prototype. створити власний foreach, filter

const arr = [1,2,3,33,4,564,6757,8,22]

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
};

Array.prototype.myFilter = function (callback) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray;
}

console.log(arr.myForEach(array => array.length));
console.log(arr.myFilter(array => array % 2 === 0))