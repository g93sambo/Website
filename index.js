const modal = document.querySelector("dialog");
const addBtn = document.querySelector("#add-button");
const closeBtn = document.querySelector("#close");
const bookContainer = document.querySelector(".grid");
const addBtnContainer = document.querySelector(".add-book");

const form = document.querySelector("form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#page-number");
const readInput = document.querySelector("#read");

const libraryBooks = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addBtn.addEventListener("click", e =>{
    modal.showModal();
});

closeBtn.addEventListener("click", 
    e =>{
        modal.close();
        e.preventDefault();
    }
)

form.addEventListener("submit", e => {
        const book = new Book(titleInput.value, authorInput.value,
                              pagesInput.value, readInput.checked);  
        libraryBooks.push(book);
        showBooks(book, libraryBooks.length - 1);
        form.reset();
    }
);

function showBooks(bookobj, index){
    const book = document.createElement("div")
    book.className = "book"
    book.setAttribute("data-index", `${index}`)

    const titleele = document.createElement("h2")
    titleele.textContent = `${bookobj.title}`

    const authorele = document.createElement("h3")
    authorele.textContent = `${bookobj.author}`

    const pagesele = document.createElement("h4")
    pagesele.textContent = `${bookobj.pages}  "pages"`

    const readele = document.createElement("button")
    if(bookobj.read){
        readele.textContent = "Read"
        readele.className = "read"
    } else {
        readele.textContent = "Not read"
        readele.className = "not-read"
    }

   book.appendChild(titleele)
   book.appendChild(authorele)
   book.appendChild(pagesele)
   book.appendChild(readele)

   bookContainer.insertBefore(book, addBtnContainer)
}