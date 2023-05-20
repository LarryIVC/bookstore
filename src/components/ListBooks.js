import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import '../css/ListBooks.css';

const ListBooks = () => {
  const dispatch = useDispatch();
  const { books, isLoading, isError } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error:
        {isError}
      </div>
    );
  }
  return (
    <div className="ListBooks">
      {books.map((itemBook) => (
        <Book key={itemBook.item_id} data={itemBook} />
      ))}
    </div>
  );
};

export default ListBooks;
