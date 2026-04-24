class Cinderella {
    constructor(name, age, shoe_size) {
        this.name = name;
        this.age = age;
        this.shoe_size = shoe_size;
    }
}

class Prince{
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findPrincess(array){
        for (const girl of array) {
            if (girl.shoe_size === this.foundShoeSize){
                return girl;
            }
        }
    }

    findPrincessMethod(array){
        return array.find(search => search.shoe_size === this.foundShoeSize);
    }
}

const cinderellas = [
    new Cinderella('Anna', 18, 35),
    new Cinderella('Olga', 22, 37),
    new Cinderella('Iryna', 20, 36),
    new Cinderella('Katya', 19, 34),
    new Cinderella('Maria', 21, 38),
    new Cinderella('Svitlana', 25, 39),
    new Cinderella('Julia', 18, 33),
    new Cinderella('Elena', 23, 37),
    new Cinderella('Natalia', 24, 35),
    new Cinderella('Viktoria', 19, 32)
]

const prince = new Prince('Charles', 25, 35)

prince.findPrincessMethod(cinderellas)
prince.findPrincess(cinderellas)