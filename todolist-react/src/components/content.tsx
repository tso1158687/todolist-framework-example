import { Todo } from "../type/todo.type";
import { useState } from "react";

const Content = (prop: { todoList: Todo[] }) => {
  const { todoList } = prop;
  console.log(todoList);
  const [todoListInside, setTodoListInside] = useState<Todo[]>(todoList);
  console.log(todoListInside);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todoListInside.map((todo: Todo) => (
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.content}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Content;
