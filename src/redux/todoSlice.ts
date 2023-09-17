import { createSlice } from "@reduxjs/toolkit";

import {addTodo, getTodos, changeTodo, deleteTodo, deleteCompletedTodo} from './todoThunk';

const initialState: TodoItemType[] = [];

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        return [];
      })
      .addCase(getTodos.rejected, (state, action) => {
        return [];
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        return [...state, action.payload]
      })
      .addCase(changeTodo.fulfilled, (state, action) => {
        return state.map(el => {
          if (el.id === action.payload.id) return action.payload;
          return el
        })
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter((el) => el.id !== action.payload)
      })
        .addCase(deleteCompletedTodo.fulfilled, (state, action) => {
          return action.payload
        })
  }
})

export default todoSlice.reducer;