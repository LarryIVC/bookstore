import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const {
    key,
    category,
    title,
    author,
    progress,
    chapter,
  } = useSelector((store) => store.book);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      key,
      category,
      title,
      author,
      progress,
      chapter,
    }, key));
  };

  return (
    <>
      <p>ADD NEW BOOK</p>
      <form onSubmit={() => handleSubmit}>
        <input type="text" placeholder="Book title" />
        <select id="cars">
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default AddNewBook;
