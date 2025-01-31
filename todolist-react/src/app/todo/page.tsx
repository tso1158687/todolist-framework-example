"use client";
import { useDispatch } from "react-redux";
import { todosActions } from "../todoSlice";
import { useState } from "react";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();

  const [todo, setTodo] = useState("");

  return (
    <header className="header">
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (todo) {
              dispatch(todosActions.addTodo(todo));
              setTodo("");
            }
          }
        }}
      />
    </header>
  );
}
