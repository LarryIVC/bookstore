import React from 'react';
import Book from './Book';

const ListBooks = () => {
  const listBook = [
    {
      key: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      key: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      key: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: '0%',
      chapter: 'Introduction',
    },

  ];
  return (
    <div>
      {listBook.map((itemBook) => (
        <Book
          key={itemBook.key}
          category={itemBook.category}
          title={itemBook.title}
          author={itemBook.author}
          progress={itemBook.progress}
          chapter={itemBook.chapter}
        />
      ))}
      ;
    </div>
  );
};

export default ListBooks;
