/* Create a library constructor that initializes a books array. Implement:
        • addBook(book): Adds a book to the books array
        • findBook(title): Searches for a book by title and retunrs "Book found" or "Book not found"

Challenge
    • Implement Library constructor with a books array
    • Attach a method addBook(book) and findBook(title) methods to the prototype

*/

function Library () {
    this.books = []
}

Library.prototype.addBook = function (book) {
    this.books.push(book)
}

Library.prototype.findBook = function (title) {
    let book = this.books.find((book) => book === title)
    if(book) return "Book found"
    return "Book not found"
}