let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`}
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}
let HP = new Book("Harry Potter", "J.K. Rowling", 400, "I have read this book");
let Bible = new Book("Bible", "God", 2000, "I have read this book");
myLibrary.push(HP);
myLibrary.push(Bible);
function render(bookArray){
    let bookHTML = "";
    for (i=0; i<bookArray.length; i++){
        bookHTML += `<div class="card"><p> ${myLibrary[i].title}</p>
        <p> ${myLibrary[i].author}</p>
        <p> ${myLibrary[i].pages} pages </p>
        <p> ${myLibrary[i].read}</p></div>`
    }
    document.getElementById("bookContainer").innerHTML = bookHTML;
}
function addForm(){
    document.getElementById("addBook").style.display="block";
}

render(myLibrary);