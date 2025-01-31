import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// 型別幫助
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
