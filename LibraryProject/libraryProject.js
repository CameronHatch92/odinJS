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
        bookHTML += `<div class="card" id="book${i}"><p> ${myLibrary[i].title}</p>
        <p> ${myLibrary[i].author}</p>
        <p> ${myLibrary[i].pages} pages </p>
        <p> ${myLibrary[i].read}</p>
        <button class="bookButton" onclick="removeBook(book${i})">Remove Book</button>
        <button onclick="changeStatus(${i})">Read/Not Read</button></div>`
    }
    document.getElementById("bookContainer").innerHTML = bookHTML;
}
function addForm(){
    document.getElementById("addBook").style.display="block";
}

function addToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("numberOfPages").value;
    let read = document.getElementById("have-you-read").value;
    if(read==="read"){
        read="I have read this book";
    }else{
        read="I have not read this book";
    }
    let newBook = new Book(title,author, numberOfPages, read);
    myLibrary.push(newBook);
    render(myLibrary);
    document.getElementById("bookForm").reset();
    document.getElementById("addBook").style.display= "none";
}

function removeBook(bookId){
    let idToUse=bookId.id;
    let index=idToUse.slice(4);
    myLibrary.splice(index);
    document.getElementById(idToUse).remove();
}

function changeStatus(index){
    if(myLibrary[index].read==="I have read this book"){
        myLibrary[index].read="I have not read this book";
    }else{
        myLibrary[index].read="I have read this book";
    }
    render(myLibrary);
}

render(myLibrary);