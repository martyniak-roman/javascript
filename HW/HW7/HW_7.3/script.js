function User(id,name,email,surname,phone) {
  this.id = id;
  this.name = name;
  this.surname = surname
  this.email = email
  this.phone = phone;
}
const users = [
  new User(1, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(2, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(3, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(4, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(5, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(6, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(7, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(8, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(9, "John", "john_dee@gmail.com", "Dee", 09845678),
new User(10, "John", "john_dee@gmail.com", "Dee", 09845678),
]

const sortedUsers = users.sort(((a, b) => a.id - b.id));

console.log(sortedUsers)