const addBook = document.getElementById("addBook");
const newBookForm = document.querySelector(".container-form")

//form controls
const book_title = document.getElementById("book_name");
const book_author =  document.getElementById("book_author");
const book_pages =  document.getElementById("book_pages");
const book_status = document.getElementById("read_status");
const submit_button = document.getElementById("submitButton");

addBook.addEventListener("click", (e) => {
    newBookForm.classList.toggle("hidden");

})

submit_button.addEventListener("click", (e) => {
    e.preventDefault();
    
})

const myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  // do stuff here
}