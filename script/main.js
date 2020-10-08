/* eslint-disable no-use-before-define */

const myLibrary = [];

const addBookButton = document.getElementById('add');
const info = document.getElementsByClassName('book-input');
const form = document.getElementsByTagName('form')[0];
const cards = document.getElementById('cards');

let bookCounter = 0;
let bookFormOn = 0;

function Book(title, author, pages, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;
}

function clearCards() {
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
}

function deleteCard(event) {
  const index = event.target.value;
  myLibrary.splice(index, 1);
  viewBooks();
}

function read(event) {
  const index = event.target.value;
  myLibrary[index].status = true;
  event.target.setAttribute('class', 'form-hide');
}

function renderCard(book, index) {
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
  b1.addEventListener('click', deleteCard);
  b1.setAttribute('class', 'delete button');
  const b2 = document.createElement('button');
  b2.addEventListener('click', read);
  b2.textContent = 'Read';
  b2.setAttribute('class', 'read button');
  b2.setAttribute('value', index);
  divCard.append(h2, h3, p, b1, b2);
}

function viewBooks() {
  clearCards();
  for (let i = 0; i < myLibrary.length; i += 1) {
    renderCard(myLibrary[i], i);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  viewBooks();
}

function addBook() {
  if (bookFormOn === 0) {
    form.classList.toggle('form-hide');
    bookFormOn = 1;
  } else {
    const book = new Book(info[0].value, info[1].value, info[2].value, bookCounter);
    bookCounter += 1;
    addBookToLibrary(book);
    form.classList.toggle('form-hide');
    bookFormOn = 0;
  }
}

addBookButton.addEventListener('click', addBook);