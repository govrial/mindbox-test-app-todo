import { createAsyncThunk } from "@reduxjs/toolkit";

import { TodoData } from "../api/apiTodoData";

const getTodos = createAsyncThunk(
  'todoSlice/getTodos',
  async () => {
    try {
      const list = await new TodoData().getData();
      return list;
    } catch (error) {
      return Promise.reject('Empty');
    }
  }
)

const addTodo = createAsyncThunk(
  'todoSlice/addTodo',
  async (data: TodoItemType, { rejectWithValue }) => {
    try {
      const list = await new TodoData().addData(data);
      return list;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
)

const changeTodo = createAsyncThunk(
  'todoSlice/changeTodo',
  async (data: TodoItemType, { rejectWithValue }) => {
    try {
      const list = await new TodoData().changeData(data);
      return list;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
)

const deleteTodo = createAsyncThunk(
  'todoSlice/deleteTodo',
  async (id: TodoItemType['id'][], { rejectWithValue }) => {
    try {
      const list = await new TodoData().deleteData(id);
      return list;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

export { getTodos, addTodo, changeTodo, deleteTodo };