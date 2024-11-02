import React from 'react';

const BookList = ({ books, deleteBook }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{book.title}</h5>
              <p>{book.author}</p>
              <p>{book.description}</p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;