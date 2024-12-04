import React, { useEffect, useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/bookform';

const App = () => {
  const [books, setBooks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(`${apiUrl}/api/books`);
    const data = await response.json();
    setBooks(data);
  };

  const addBook = async (book) => {
    const response = await fetch(`${apiUrl}/api/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    const newBook = await response.json();
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const deleteBook = async (id) => {
    await fetch(`${apiUrl}/api/books/${id}`, {
      method: 'DELETE',
    });
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="container">
      <h1 className="mt-4">Books Collection</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default App;