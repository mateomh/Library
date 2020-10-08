/* eslint-disable no-use-before-define */

// Factory function refactoring for the library
const libraryFactory = () => {
  const myLibrary =[];
  const cards = document.getElementById('cards');

  const showLibrary = () => {
    return myLibrary;
  };

  const deleteBook = (event) => {
    const index = event.target.value;
    myLibrary.splice(index, 1);
    viewBooks();
  };

  const readBook = (event) => {
    const index = event.target.value;
    myLibrary[index].status = true;
    event.target.setAttribute('class', 'form-hide');
  };

  const addBookToLibrary = (book) => {
    myLibrary.push(book);
    viewBooks();
  };
  
  // Private methods
  const clearCards = () => {
    while (cards.firstChild) {
      cards.removeChild(cards.firstChild);
    }
  };

  const renderCard = (book, index) => {
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
  };

  const viewBooks = () => {
    clearCards();
    for (let i = 0; i < myLibrary.length; i += 1) {
      renderCard(myLibrary[i], i);
    }
  };

  const deleteCard = (event) => {
    const index = event.target.value;
    myLibrary.splice(index, 1);
    viewBooks();
  };

  const read = (event) => {
    const index = event.target.value;
    myLibrary[index].status = true;
    event.target.setAttribute('class', 'form-hide');
  };

  return {deleteBook, readBook, addBookToLibrary, showLibrary};
};

// Factory function refactoring for the book
const bookFactory = (title, author, pages, id) => {
  return {title, author, pages, id};
};

function addBook() {
  if (bookFormOn === 0) {
    form.classList.toggle('form-hide');
    bookFormOn = 1;
  } else {
    const book = bookFactory(info[0].value, info[1].value, info[2].value, bookCounter);
    bookCounter += 1;
    library.addBookToLibrary(book);
    form.classList.toggle('form-hide');
    bookFormOn = 0;
  }
}

const library = libraryFactory();

const addBookButton = document.getElementById('add');
const form = document.getElementsByTagName('form')[0];
const info = document.getElementsByClassName('book-input');
let bookCounter = 0;
let bookFormOn = 0;

addBookButton.addEventListener('click', addBook);