import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/bookSlice';
import categoryReducer from './category/categorySlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
