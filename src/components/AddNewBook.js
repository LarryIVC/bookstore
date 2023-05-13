import React from 'react';

const AddNewBook = () => (
  <>
    <p>ADD NEW BOOK</p>
    <form>
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

export default AddNewBook;
