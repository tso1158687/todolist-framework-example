// todosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  content: string;
  id: number;
  create: Date;
  completed: boolean;
};

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        content: action.payload,
        id: Date.now(),
        create: new Date(),
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
