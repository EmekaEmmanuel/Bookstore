import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, action) => [...state, action.payload],
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
