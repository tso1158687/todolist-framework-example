"use client";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleTodo, removeCompletedTodo, removeTodo } from "../todoSlice";

function useFormattedDate(date: Date): string {
  return useMemo(() => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }, [date]);
}

export default function Page() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const remainingTodo = todos.filter((t) => !t.completed).length;
  const formattedDate = useFormattedDate(new Date());
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => dispatch(toggleTodo(todo.id))}
              />
              <label className={todo.completed ? "completed" : ""}>
                {todo.content}/ {formattedDate}
              </label>
              <button
                className="destroy"
                onClick={() => dispatch(removeTodo(todo.id))}
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
          onClick={() => dispatch(removeCompletedTodo())}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}
