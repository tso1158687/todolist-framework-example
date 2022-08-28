import { useState } from "react";

const Header = () => {
  const [todo, setTodo] = useState('gogogo');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    const { value } = e.target;
    setTodo(value);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleInputChange}
        value={todo}
      />
      <div>{todo}</div>
    </header>
  );
};
export default Header;
