class Book {
    constructor(name, author, imageUrl) {
        this.name = name;
        this.author = author;
        this.imageUrl = imageUrl;
        this.read = false; // Initially marked as not read
    }

    markAsRead() {
        this.read = true;
    }

    markAsNotRead() {
        this.read = false;
    }
}

class BookStore {
    constructor() {
        this.books = [];
    }

    addBook(name, author, imageUrl) {
        const book = new Book(name, author, imageUrl);
        this.books.push(book);
    }

    deleteBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
        }
    }

    getBook(index) {
        if (index >= 0 && index < this.books.length) {
            return this.books[index];
        }
    }

    toggleReadStatus(index) {
        const book = this.getBook(index);
        if (book) {
            if (book.read) {
                book.markAsNotRead();
            } else {
                book.markAsRead();
            }
        }
    }
}
