const addBook = document.getElementById("addBook");
const newBookForm = document.querySelector(".container-form")
const book_container = document.querySelector(".book_container")

//form controls
const book_title = document.getElementById("book_name");
const book_author =  document.getElementById("book_author");
const book_pages =  document.getElementById("book_pages");
const book_status = document.getElementById("read_status");
const submit_button = document.getElementById("submitButton");
const cancel_button = document.getElementById("cancelButton");

const formInputs = document.querySelectorAll("#add_book_form input")

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

    if (book.title === "" || book.author === "" || book.pages === "") {
        formInputs.forEach(input => {
            input.setAttribute("placeholder", "Input the needed info")
        });
        return;
    } else {
        newBookForm.classList.toggle("hidden");
        emptyField();
        myLibrary.push(book);
        generateLists();
    }
}

function emptyField() {
    book_title.value = "";
    book_author.value = "";
    book_pages.value = "";
    book_status.checked = false;
    formInputs.forEach(input => {
        input.setAttribute("placeholder", "")
    });
}

function generateLists() {

    book_container.innerHTML = "";

    myLibrary.forEach(book => {
        const newBook = document.createElement("div")
        newBook.classList.add("book");
        book_container.appendChild(newBook);

        const title = document.createElement("p")
        title.innerText = book.title;
        title.classList.add("title");
        newBook.appendChild(title);

        const author = document.createElement("p")
        author.innerText = book.author;
        author.classList.add("author");
        newBook.appendChild(author);

        const pages = document.createElement("p")
        pages.innerText = book.pages + " pages";
        pages.classList.add("pages");
        newBook.appendChild(pages);

        const read = document.createElement("p")
        read.innerText = "Read:";
        read.classList.add("read_status");
        newBook.appendChild(read);

        const checkbox = document.createElement("input")
        checkbox.classList.add("read");
        checkbox.setAttribute("type", "checkbox")
        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                book.status = true;
            } else {
                book.status = false;
            }
        })
        if (book.status === true) {
            checkbox.checked = true
        } else {
            checkbox.checked = false
        }
        newBook.appendChild(checkbox);

        const remove = document.createElement("button");
        remove.classList.add("remove_button")
        remove.innerText = "Remove Book"
        remove.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1)
            newBook.remove()
        })
        newBook.appendChild(remove)
    });
}