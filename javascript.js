let myLibrary = [];

function Book (name, author, genre){
    this.name = name
    this.author = author
    this.genre = genre
}

const bookOne = new Book("A", "B" , "C")

console.log(bookOne.name)