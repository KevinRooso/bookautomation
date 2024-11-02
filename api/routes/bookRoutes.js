const express = require('express');
const router = express.Router();
const BookService = require('../services/bookService');

// Create a new book
router.post('/', async (req, res) => {
  try {
    const newBook = await BookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await BookService.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await BookService.updateBook(id, req.body);
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await BookService.deleteBook(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
