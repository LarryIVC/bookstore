import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../css/AddNewBook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dato = {
      item_id: uuidv4(),
      category: e.target.categories.value,
      title: e.target.title.value,
      author: e.target.author.value,
    };
    dispatch(addBook(dato));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div className="new-book">
      <h2 className="new-title">ADD NEW BOOK</h2>
      <form className="frm-new-book" onSubmit={(e) => handleSubmit(e)}>
        <input className="input" name="title" type="text" placeholder="Book title" />
        <input className="input" name="author" type="text" placeholder="Author Book" />
        <select className="input dark" name="categories">
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          className="btn-updt"
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
