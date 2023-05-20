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
        <div className="cnt-book-left">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <button
            className="btn-book rb"
            type="button"
          >
            Comments
          </button>
          <button
            className="btn-book rb b2"
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button
            className="btn-book b2"
            type="button"
          >
            Edit
          </button>
        </div>
        <div className="cont-center">
          <div className="progress" />
          <div>
            <p className="txt-pcnt">60%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="cont-book-right">
          <h3 className="chapter">CURRENT CHAPTER</h3>
          <p className="ch-txt">
            Chapter_
            {Math.floor(Math.random() * 91) + 10}
          </p>
          <button
            type="button"
            className="btn-updt"
          >
            UPDATE PROGRESS
          </button>
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
