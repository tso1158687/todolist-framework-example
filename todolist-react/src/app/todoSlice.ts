import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./type/todo.type";



const initialState: Todo[] = [
  {
    content: "吃飯",
    id: 1,
    create: new Date(2021, 8, 1).toString(),
    completed: false,
  },
  {
    content: "睡覺",
    id: 2,
    create: new Date(2023, 8, 2).toString(),
    completed: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      console.log(state, action);
      state.push({
        content: action.payload,
        id: +Date.now(),
        create: new Date().toString(),
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload);
    },

    removeCompletedTodo: (state) => {
      return state.filter((t) => !t.completed);
    },
  },
});

export const { addTodo, toggleTodo,removeTodo,removeCompletedTodo } = todosSlice.actions;
export default todosSlice.reducer;
