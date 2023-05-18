import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  // const {
  //   itemId,
  //   category,
  //   title,
  //   author,
  // } = useSelector((store) => store.book);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('e', e.target.categories.value);
    dispatch(addBook({
      itemId: uuidv4(),
      category: e.target.categories.value,
      title: e.target.title.value,
      author: e.target.author.value,
    }));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <>
      <p>ADD NEW BOOK</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="title" type="text" placeholder="Book title" />
        <input name="author" type="text" placeholder="Author Book" />
        <select id="categories">
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
