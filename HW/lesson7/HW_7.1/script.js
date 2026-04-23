const arr = []

function User(id,name,email,surname,phone) {
    this.id = id;
    this.name = name;
    this.email = email
    this.phone = phone;
}

const user1 = new User(1, "John", "john_dee@gmail.com", "Dee", 09845678);
const user4 = new User(4, "John", "john_dee@gmail.com", "Dee", 09845678);
const user5 = new User(5, "John", "john_dee@gmail.com", "Dee", 09845678);
const user6 = new User(6, "John", "john_dee@gmail.com", "Dee", 09845678);
const user7 = new User(7, "John", "john_dee@gmail.com", "Dee", 09845678);
const user8 = new User(8, "John", "john_dee@gmail.com", "Dee", 09845678);
const user9 = new User(9, "John", "john_dee@gmail.com", "Dee", 09845678);
const user10 = new User(10, "John", "john_dee@gmail.com", "Dee", 09845678);
const user2 = new User(2, "John", "john_dee@gmail.com", "Dee", 09845678);
const user3 = new User(3, "John", "john_dee@gmail.com", "Dee", 09845678);

arr.push(user1, user2, user3, user4, user5, user6, user7,user8,user9,user10);

console.log(arr);