import { React, useState } from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, description });
    setTitle("");
    setAuthor("");
    setDescription("");
  };

return (
  <form onSubmit={handleSubmit} className="mb-4">
    <h2>Add a New Book</h2>
    <div className="mb-3">
      <label className="form-label">Title</label>
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Author</label>
      <input
        type="text"
        className="form-control"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Description</label>
      <textarea
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-primary">Add Book</button>
  </form>
);

};

export default BookForm;