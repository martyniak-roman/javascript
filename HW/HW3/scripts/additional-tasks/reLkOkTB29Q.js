// TODO : створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор

const books = [
  { title: 'The Hobbit', pages: 310, authors: ['J.R.R. Tolkien'], genres: ['Fantasy', 'Adventure'] },
  { title: 'American Gods', pages: 465, authors: ['Neil Gaiman'], genres: ['Fantasy', 'Mythology', 'Fiction'] },
  { title: 'Good Omens', pages: 432, authors: ['Terry Pratchett', 'Neil Gaiman'], genres: ['Comedy', 'Fantasy'] },
  { title: 'Clean Code', pages: 464, authors: ['Robert C. Martin'], genres: ['Education', 'Programming', 'IT', 'Tech'] },
  { title: 'The Little Prince', pages: 96, authors: ['Antoine de Saint-Exupéry'], genres: ['Fable'] },
  { title: 'The Great Gatsby', pages: 180, authors: ['F. Scott Fitzgerald'], genres: ['Classic', 'Tragedy'] }
];

let biggestBook = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].pages > biggestBook.pages) {
    biggestBook = books[i];
  }
}
console.log('Найбільша книжка:', biggestBook);

let maxGenresCount = 0;
for (let i = 0; i < books.length; i++) {
  if (books[i].genres.length > maxGenresCount) {
    maxGenresCount = books[i].genres.length;
  }
}

const booksWithMaxGenres = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].genres.length === maxGenresCount) {
    booksWithMaxGenres[booksWithMaxGenres.length] = books[i];
  }
}
console.log('Книжка з найбільшою кількістю жанрів:', booksWithMaxGenres);

let maxTitleLength = 0;
for (let i = 0; i < books.length; i++) {
  if (books[i].title.length > maxTitleLength) {
    maxTitleLength = books[i].title.length;
  }
}

const booksWithLongestTitle = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].title.length === maxTitleLength) {
    booksWithLongestTitle[booksWithLongestTitle.length] = books[i];
  }
}
console.log('Книжка з найдовшою назвою:', booksWithLongestTitle);

const twoAuthorsBooks = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 2) {
    twoAuthorsBooks[twoAuthorsBooks.length] = books[i];
  }
}
console.log('Книжка яку писали 2 автори:', twoAuthorsBooks);

const oneAuthorBooks = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 1) {
    oneAuthorBooks[oneAuthorBooks.length] = books[i];
  }
}
console.log('Книжка яку писав один автор:', oneAuthorBooks);