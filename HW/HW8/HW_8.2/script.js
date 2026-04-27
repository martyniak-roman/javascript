function deepClone(obj) {
    if (obj === null){
        return null;
    }
    if (obj === undefined){
        return undefined;
    }
    if (typeof obj === 'number' && Number.isNaN(obj)){
        return NaN;
    }

    if (typeof obj === 'function') {
        return obj;
    }

    if (typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clone = {};

    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}


const user = {
    name: 'Roman',
    age: 25,
    status: undefined,
    wife: null,
    balance: NaN,
    skills: ['js', 'python'],
    address: {
        city: 'Lviv',
        zip: 79000
    },
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const copy = deepClone(user);

console.log(copy);
console.log(copy === user);
console.log(copy.address === user.address);
console.log(copy.skills === user.skills);
console.log(copy.balance);
console.log(copy.status);
console.log(copy.wife);

copy.greet();