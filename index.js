const addBook = document.getElementById("addBook");
const newBookForm = document.querySelector(".container-form")

//form controls
const book_title = document.getElementById("book_name");
const book_author =  document.getElementById("book_author");
const book_pages =  document.getElementById("book_pages");
const book_status = document.getElementById("read_status");
const submit_button = document.getElementById("submitButton");
const cancel_button = document.getElementById("cancelButton");

addBook.addEventListener("click", (e) => {
    newBookForm.classList.toggle("hidden");
})

submit_button.addEventListener("click", addBookToLibrary)

cancel_button.onclick = function() {
    newBookForm.classList.toggle("hidden");
    emptyField();
}

const myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(e) {
  // do stuff here
  const book = new Book(book_title.value, book_author.value, book_pages.value, book_status.checked);
    e.preventDefault();
    newBookForm.classList.toggle("hidden");
    emptyField();
    myLibrary.push(book);
}

function emptyField() {
    book_title.value = "";
    book_author.value = "";
    book_pages.value = "";
    book_status.checked = false;
}