import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ data }) => {
  const {
    itemId, category, title, author,
  } = data;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
          <button
            type="button"
          >
            Comments
          </button>
          <button
            type="button"
            onClick={() => dispatch(removeBook(itemId))}
          >
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
    itemId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
