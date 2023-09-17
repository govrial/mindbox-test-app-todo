import { createSlice } from "@reduxjs/toolkit";

import { addTodo, getTodos, changeTodo, deleteTodo } from './todoThunk';

const initialState: TodoItemType[] = [];

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        return [];
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(changeTodo.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return action.payload;
      })
  }
})

export default todoSlice.reducer;