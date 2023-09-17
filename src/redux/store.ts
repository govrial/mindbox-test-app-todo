import { configureStore } from "@reduxjs/toolkit"

import modeSlice from "./modeSlice";
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    mode: modeSlice,
    todoList: todoSlice,
  }
})

export { store }