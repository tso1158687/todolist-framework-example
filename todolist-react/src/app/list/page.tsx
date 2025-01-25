"use client"
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Page() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.content}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}

      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong> remainingTodo </strong> left
        </span>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}
