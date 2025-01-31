import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "./type/todo.type";
import {
  addTodoApi,
  getTodoListDataApi,
  toggleCompleteStatusApi,
  removeTodoApi,
  removeCompletedTodoApi,
} from "./services/todo.service";
export interface TodosState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

const getTodoListData = createAsyncThunk("todo/getTodoList", async () => {
  const data = await getTodoListDataApi();
  return data;
});

const addTodo = createAsyncThunk("todo/addTodo", async (content: string) => {
  const data = await addTodoApi(content);
  return data;
});

const toggleCompleteStatus = createAsyncThunk(
  "todo/toggleCompleteStatus",
  async (todo: Todo) => {
    const data = await toggleCompleteStatusApi(todo);
    return data;
  }
);

const removeTodo = createAsyncThunk("todo/removeTodo", async (todo: Todo) => {
  const data = await removeTodoApi(todo);

  return { id: todo.id, success: data };
});

const removeCompletedTodo = createAsyncThunk(
  "todo/removeCompletedTodo",
  async () => {
    const data = await removeCompletedTodoApi();
    return data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoListData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getTodoListData.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });

    builder.addCase(removeTodo.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.items = state.items.filter((t) => t.id !== action.payload.id);
      }
    });
  },
});
export const todosActions = {
  getTodoListData,
  addTodo,
  toggleCompleteStatus,
  removeTodo,
  removeCompletedTodo,
};
export default todosSlice.reducer;
