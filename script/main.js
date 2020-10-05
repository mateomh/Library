// setting the constructor
// event for adding, removing
// localStorage

let myLibrary = [];

const addBookButton = document.getElementById('add');
const info = document.getElementsByClassName('book-input');
const cards = document.getElementById('cards');
const form = document.getElementsByTagName('form')[0];


let book_counter = 0;
let book_form_on = 0;

function Book(title,author,pages, id) {
  this.title = title
  this.author = author
  this.pages = pages
  this.id = id
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  viewBooks();
}

function addBook() {
  if(book_form_on === 0)
  {
    form.classList.toggle('form-hide'); 
    book_form_on = 1;
  }
  else
  {
    book = new Book(info[0].value, info[1].value, info[2].value, book_counter);
    book_counter++;
    addBookToLibrary(book);
    form.classList.toggle('form-hide');
    book_form_on = 0;
  }
  
}

function viewBooks() { //display a card on the brawser
  for(let book of myLibrary)
  {
   renderCard(book); 
  }
}

function renderCard(book){
  const div_card = document.createElement('div');
  div_card.setAttribute('class','book-card');
  div_card.setAttribute('id',book.id);
  cards.appendChild(div_card);
  h2 = document.createElement('h2');
  h2.textContent = book.title;
  
  h3 = document.createElement('h3');
  h3.textContent = 'Author:' + book.author;
  
  p = document.createElement('p');
  p.textContent = 'Total pages:' + book.pages;
  
  b1 = document.createElement('button');
  b1.textContent = 'Delete';
  b1.setAttribute('class','delete button');
  b2 = document.createElement('button');
  b2.textContent = 'Read';
  b2.setAttribute('class','read button');
  div_card.appendChild(h2);
  div_card.appendChild(h3);
  div_card.appendChild(p);
  div_card.appendChild(b1);
  div_card.appendChild(b2);
}

addBookButton.addEventListener('click',addBook)