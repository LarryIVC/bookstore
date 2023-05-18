import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ListBooks = () => {
  const state = useSelector((state) => state.book);
  return (
    <div>
      {state.books.map((itemBook) => (
        <Book
          key={itemBook.itemId}
          data={itemBook}
        />
      ))}
    </div>
  );
};

export default ListBooks;
