/* eslint-disable no-use-before-define */

// Factory function refactoring for the library
// const libraryFactory = () => {
//   const myLibrary = [];
//   const cards = document.getElementById('cards');

//   const showLibrary = () => myLibrary;

//   const deleteBook = (event) => {
//     const index = event.target.value;
//     myLibrary.splice(index, 1);
//     viewBooks();
//   };

//   const readBook = (event) => {
//     const index = event.target.value;
//     myLibrary[index].status = true;
//     event.target.setAttribute('class', 'form-hide');
//   };

//   const addBookToLibrary = (book) => {
//     myLibrary.push(book);
//     viewBooks();
//   };

//   // Private methods
//   const clearCards = () => {
//     while (cards.firstChild) {
//       cards.removeChild(cards.firstChild);
//     }
//   };

//   const renderCard = (book, index) => {
//     const divCard = document.createElement('div');

//     divCard.setAttribute('class', 'book-card');
//     divCard.setAttribute('id', book.id);
//     cards.appendChild(divCard);
//     const h2 = document.createElement('h2');
//     h2.textContent = book.title;

//     const h3 = document.createElement('h3');
//     h3.textContent = `Author:${book.author}`;

//     const p = document.createElement('p');
//     p.textContent = `Total pages:${book.pages}`;

//     const b1 = document.createElement('button');
//     b1.textContent = 'Delete';
//     b1.setAttribute('value', index);
//     b1.addEventListener('click', deleteCard);
//     b1.setAttribute('class', 'delete button');
//     const b2 = document.createElement('button');
//     b2.addEventListener('click', read);
//     b2.textContent = 'Read';
//     b2.setAttribute('class', 'read button');
//     b2.setAttribute('value', index);
//     divCard.append(h2, h3, p, b1, b2);
//   };

//   const viewBooks = () => {
//     clearCards();
//     for (let i = 0; i < myLibrary.length; i += 1) {
//       renderCard(myLibrary[i], i);
//     }
//   };

//   const deleteCard = (event) => {
//     const index = event.target.value;
//     myLibrary.splice(index, 1);
//     viewBooks();
//   };

//   const read = (event) => {
//     const index = event.target.value;
//     myLibrary[index].status = true;
//     event.target.setAttribute('class', 'form-hide');
//   };

//   return {
//     deleteBook, readBook, addBookToLibrary, showLibrary,
//   };
// };

class Library {
  constructor() {
    this.myLibrary = [];
    this.cards = document.getElementById('cards');
  }
  
  showLibrary() {
    return this.myLibrary;
  }

  viewBooks(){
    this.clearCards();
    for (let i = 0; i < this.myLibrary.length; i += 1) {
      this.renderCard(this.myLibrary[i], i);
    }
  }

  deleteBook(event){
    const index = event.target.value;
    this.myLibrary.splice(index, 1);
    this.viewBooks();
  }

  readBook(event){
    const index = event.target.value;
    this.myLibrary[index].status = true;
    event.target.setAttribute('class', 'form-hide');
  }

  addBookToLibrary(book){
    this.myLibrary.push(book);
    this.viewBooks();
  }

  clearCards(){
    while (cards.firstChild) {
      this.cards.removeChild(cards.firstChild);
    }
  }

  renderCard(book, index){
    const divCard = document.createElement('div');

    divCard.setAttribute('class', 'book-card');
    divCard.setAttribute('id', book.id);
    cards.appendChild(divCard);
    const h2 = document.createElement('h2');
    h2.textContent = book.title;

    const h3 = document.createElement('h3');
    h3.textContent = `Author:${book.author}`;

    const p = document.createElement('p');
    p.textContent = `Total pages:${book.pages}`;

    const b1 = document.createElement('button');
    b1.textContent = 'Delete';
    b1.setAttribute('value', index);
    b1.addEventListener('click', this.deleteCard.bind(this));
    b1.setAttribute('class', 'delete button');
    const b2 = document.createElement('button');
    b2.addEventListener('click', this.read.bind(this));
    b2.textContent = 'Read';
    b2.setAttribute('class', 'read button');
    b2.setAttribute('value', index);
    divCard.append(h2, h3, p, b1, b2);
  }

  deleteCard(event){
    console.log(this.myLibrary);
    const index = event.target.value;
    this.myLibrary.splice(index, 1);
    this.viewBooks();
  }

  read(event){
    const index = event.target.value;
    this.myLibrary[index].status = true;
    event.target.setAttribute('class', 'form-hide');
  }
}

// Factory function refactoring for the book
class Book {
  constructor(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
  }
}

function addBook() {
  if (bookFormOn === 0) {
    form.classList.toggle('form-hide');
    bookFormOn = 1;
  } else {
    const book = new Book(info[0].value, info[1].value, info[2].value, bookCounter);
    bookCounter += 1;
    library.addBookToLibrary(book);
    form.classList.toggle('form-hide');
    bookFormOn = 0;
  }
}

const library = new Library;

const addBookButton = document.getElementById('add');
const form = document.getElementsByTagName('form')[0];
const info = document.getElementsByClassName('book-input');
let bookCounter = 0;
let bookFormOn = 0;

addBookButton.addEventListener('click', addBook);