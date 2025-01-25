"use client";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";
import { useState } from "react";

export default function Page() {
  const dispatch = useDispatch();

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
              dispatch(addTodo(todo));
              setTodo("");
            }
          }
        }}
      />
    </header>
  );
}
