const BookRepository = require('../repositories/bookrepository')

class BookService {
  static createBook(book) {
    return BookRepository.createBook(book);
  }

  static getAllBooks() {
    return BookRepository.getAllBooks();
  }

  static updateBook(id, book) {
    return BookRepository.updateBook(id, book);
  }

  static deleteBook(id) {
    return BookRepository.deleteBook(id);
  }
}

module.exports = BookService;
