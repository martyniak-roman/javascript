//TODO: – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

function Client(id, name, surname, email, phone, ...products) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = products;
}

function Product(title, price) {
  this.title = title;
  this.price = price;
}

const client = new Client(
  1,
  "asd",
  "qwe",
  "asd@asd.com",
  "+39764645",
  new Product("tv", 13000),
  new Product("phone", 125454)
);

const clients = [
  new Client(
    1,
    "asd",
    "qwe",
    "asd@asd.com",
    "+39764645",
    new Product("tv", 13000),
    new Product("phone", 987654)
  ),
  new Client(
    2,
    "bbb",
    "ccc",
    "bbb@ccc.com",
    "+39764645",
    new Product("laptop", 25000)
  ),
];

clients.forEach((client, i) => {
  console.log("Client", i, "order:", client.order);
});

const sortedClients = clients.sort(((a, b) => a.order.length - b.order.length));

console.log(sortedClients)