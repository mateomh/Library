// setting the constructor
// event for adding, removing
// localStorage

let myLibrary = [];

const addBook = document.getElementById('add');
// const titles = document.getElementsByClassName('book-input');
// const card = document.getElementById('card');

function Book(title,author,pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  viewBooks();
}

function viewBook() { //display a card on the brawser
  for (let oneBook in myLibrary) {
    const cardBook = document.createElement('div');
    card.classList.add('book-card');
  }
}

addBook.addEventListener('click',(event)=>{
  event.preventDefault
  
})