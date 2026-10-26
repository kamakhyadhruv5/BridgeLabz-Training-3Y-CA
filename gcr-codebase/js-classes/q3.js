
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue the book only if it is available.
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    // Return an issued book.
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }

        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "ISBN101"),
    new Book("Python Guide", "Jane Doe", "ISBN102"),
    new Book("Web Development", "Alex Brown", "ISBN103", true)
];

// Display all available books.
function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\nAvailable Books:");

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ${book.ISBN}`);
    });
}

// Search for a book by ISBN and issue it.
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

displayAvailableBooks();
issueBookByISBN("ISBN101");
displayAvailableBooks();
