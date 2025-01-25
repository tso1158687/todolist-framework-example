import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  content: string;
  id: number;
  create: Date;
  completed: boolean;
};

const initialState: Todo[] = [
  {
    content: "吃飯",
    id: 1,
    create: new Date(2021, 8, 1),
    completed: false,
  },
  {
    content: "睡覺",
    id: 2,
    create: new Date(2023, 8, 2),
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
        id: Date.now(),
        create: new Date(),
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
