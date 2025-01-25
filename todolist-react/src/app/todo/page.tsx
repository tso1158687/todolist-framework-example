"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTodo, toggleTodo } from "../todoSlice";

export default function Page() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAdd = () => {
    dispatch(addTodo("新的Todo"));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"

      />
    </header>

    // <div>
    //   <button onClick={handleAdd}>新增 Todo</button>
    //   <ul>
    //     {todos.map((todo) => (
    //       <li key={todo.id}>
    //         <input
    //           type="checkbox"
    //           checked={todo.completed}
    //           onChange={() => handleToggle(todo.id)}
    //         />
    //         {todo.content}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
