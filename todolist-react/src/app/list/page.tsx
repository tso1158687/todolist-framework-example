"use client";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { todosActions } from "../todoSlice";
import type { AppDispatch } from "../store";

function useFormattedDate(date: Date): string {
  return useMemo(() => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }, [date]);
}

export default function Page() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const remainingTodo = todos.items.filter((t) => !t.completed).length;

  const formattedDate = useFormattedDate(new Date());
  useEffect(() => {
    console.log("use effect");
    // 初始化時自動抓 todos
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action = todosActions.getTodoListData();

    dispatch(action);
  }, [dispatch]);

  return (
    <div>
      <ul className="todo-list">
        {todos.items.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"

                onClick={() => dispatch(todosActions.toggleCompleteStatus(todo))}
              />
              <label className={todo.completed ? "completed" : ""}>
                {todo.content}/ {formattedDate}
              </label>
              <button
                className="destroy"
                onClick={() => dispatch(todosActions.removeTodo(todo))}
              ></button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong> {remainingTodo} </strong> left
        </span>
        <button
          className="clear-completed"
          onClick={() => dispatch(todosActions.removeCompletedTodo())}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}
