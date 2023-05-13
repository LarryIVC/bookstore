import PropTypes from 'prop-types';

const Book = ({
  category, title, author, progress, chapter,
}) => (
  <>
    <div>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <div>
        <p>{progress}</p>
        <p>Completed</p>
      </div>

      <div>
        <h3>CURRENT CHAPTER</h3>
        <p>{chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </>

);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Book;
