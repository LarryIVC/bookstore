/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../css/Book.css';

const Book = ({ data }) => {
  const {
    item_id,
    category,
    title,
    author,
  } = data;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <>
      <div className="book">
        <div>
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemoveBook(item_id)}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
        <div>
          <p>60</p>
          <p>Completed</p>
        </div>

        <div>
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter x</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  data: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
