let myLibrary = [];

function Book (title, author, genre, status){
    this.title = title
    this.author = author
    this.genre = genre
    this.status = status
}

function render() {
    let libraryEl = document.querySelector("#bookDiv");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i]; 
  
      let bookEl = document.createElement("div");
      bookEl.innerHTML = `
        <div class="bookOneTitle">${book.title}</div>
        <div class="bookOneAuthor">${book.author}</div>
        <div class="bookOneGenre">${book.genre}</div>
        <div class="bookOneStatus">${book.status}</div>
      `;
      libraryEl.appendChild(bookEl);
    }
  }
  
  function addBookToLibrary() {
    let title = document.querySelector("#bookTitle").value;
    let author = document.querySelector("#bookAuthor").value;
    let genre = document.querySelector("#bookGenre").value;
    let status = document.querySelector("#status").value;
    let newbook = new Book(title, author, genre, status);
    myLibrary.push(newbook);
    render();
  }
  
  document.querySelector("#newbook-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
  


function addBookToLibrary(){
    let title = document.querySelector("#bookTitle").value
    let author = document.querySelector("#bookAuthor").value
    let genre = document.querySelector("#bookGenre").value
    let status = document.querySelector("#status").value
    let newbook = new Book(title, author, genre, status)
    //create a card//
    myLibrary.push(newbook);
    render();
}

document.querySelector("#newbook-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})

