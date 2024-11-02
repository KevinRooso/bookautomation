const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./books.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT
  )`);
});

class BookRepository {
  static createBook(book) {
    return new Promise((resolve, reject) => {
      const { title, author, description } = book;
      db.run(`INSERT INTO books (title, author, description) VALUES (?, ?, ?)`, [title, author, description], function(err) {
        if (err) {
          return reject(err);
        }
        resolve({ id: this.lastID, ...book });
      });
    });
  }

  static getAllBooks() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM books`, [], (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  static updateBook(id, book) {
    return new Promise((resolve, reject) => {
      const { title, author, description } = book;
      db.run(`UPDATE books SET title = ?, author = ?, description = ? WHERE id = ?`, [title, author, description, id], function(err) {
        if (err) {
          return reject(err);
        }
        resolve({ id, ...book });
      });
    });
  }

  static deleteBook(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM books WHERE id = ?`, id, function(err) {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}

module.exports = BookRepository;