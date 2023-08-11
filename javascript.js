let myLibrary = [];

//change to class
/*function Book (title, author, genre, read ){
    this.title = title
    this.author = author
    this.genre = genre
    this.read = read
  
}*/

class Book  {
  
  constructor (title, author, genre, read){
  
    this.title = title
    this.author = author
    this.genre = genre
    this.read = read
}

}
//to toggle read 
Book.prototype.toggleRead= function(){
    this.read = !this.read
}
function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}
//making a book card
function render() {
    let libraryEl = document.querySelector("#bookDiv");
    libraryEl.innerHTML = " ";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i]; 
  
      let bookEl = document.createElement("div");
      bookEl.setAttribute("class", "book-card");
      bookEl.innerHTML = `
        <div class="card-header">
         <h3 class="title">${book.title}</h3>
         <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
        <p>${book.genre}</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}<p/>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Change Read Status</button>
        `; 
      libraryEl.appendChild(bookEl);
    }
  }
  //for remove button
  function removeBook(index){
    myLibrary.splice(index, 1);
    render();
  }
  //getting values from the form
  function addBookToLibrary() {
    let title = document.querySelector("#bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let genre = document.getElementById("bookGenre").value;
    let read = document.getElementById("read").checked;
    let newbook = new Book(title, author, genre, read);
    myLibrary.push(newbook);
    render();
  }
  
  document.querySelector("#newbook-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
 
 