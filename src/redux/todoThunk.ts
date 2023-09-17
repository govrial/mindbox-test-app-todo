import { createAsyncThunk } from "@reduxjs/toolkit";

const getTodos = createAsyncThunk(
  'todoSlice/getTodos',
  async () => {
    try {
      return []
    } catch (error) {
      return Promise.reject('Empty');
    }
  }
)

const addTodo = createAsyncThunk(
  'todoSlice/addTodo',
  async (data: TodoItemType, { rejectWithValue }) => {
    try {
      return data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
)

const changeTodo = createAsyncThunk(
  'todoSlice/changeTodo',
  async (data: TodoItemType, { rejectWithValue }) => {
    try {
      return data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
)

const deleteTodo = createAsyncThunk(
  'todoSlice/deleteTodo',
  async (id: number, { rejectWithValue }) => {
    try {
      return id
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

const deleteCompletedTodo = createAsyncThunk(
    'todoSlice/deleteCompletedTodo',
    async (data: TodoItemType[], { rejectWithValue }) => {
        try {
            return data
        } catch (error) {
            return rejectWithValue("Error");
        }
    }
);

export { getTodos, addTodo, changeTodo, deleteTodo, deleteCompletedTodo };