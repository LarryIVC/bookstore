import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TtdARTcw1I1Hcqatqj8P/books';

const initialState = {
  books: [],
  isLoading: true,
  isError: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(API_URL);
  const books = Object.entries(response.data).map((item) => ({
    ...item[1][0],
    item_id: item[0],
  }));
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  const response = await axios.post(API_URL, newBook);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  const response = await axios.delete(`${API_URL}/${itemId}`);
  return response.data;
});

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        // state.books.push(action.payload);
        state.books = state.books.concat(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload.item_id);
      });
  },
});

export default booksSlice.reducer;
