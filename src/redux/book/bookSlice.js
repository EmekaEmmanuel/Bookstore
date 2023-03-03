import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AvIE67KLnFDsdhR2CWwG/books';

const addBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AvIE67KLnFDsdhR2CWwG/books';

const deleteBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AvIE67KLnFDsdhR2CWwG/books/';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const { data } = await (axios.get(getBooksURL));
  return data;
});

export const addBooks = createAsyncThunk('book/addBooks', async (obj) => {
  const { data } = await (axios.post(addBooksURL, obj));
  return data;
});

export const deleteBooks = createAsyncThunk('book/deleteBooks', async (id) => {
  const { data } = await (axios.delete(`${deleteBooksURL}${id}`));
  return data;
});

/* eslint-disable no-param-reassign */

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push({
        id: newBook.item_id,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      });
    },
    deleteBook: (state, action) => {
      const bookId = action.payload;
      const filterBooks = state.books.filter((book) => book.id !== bookId);
      return { books: filterBooks };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const newArr = [];
        const arr = Object.entries(action.payload);
        arr.map(([key, value]) => {
          const data = value.map((x) => ({ ...x, id: key }));
          newArr.push(...data);
          state.books = newArr;
          return state.books;
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.books = [];
        state.error = action.error.message;
      })
      .addCase(addBooks.fulfilled, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(deleteBooks.fulfilled, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default bookSlice.reducer;

export const { addBook, deleteBook } = bookSlice.actions;
