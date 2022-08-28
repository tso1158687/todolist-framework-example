const Content = () => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>content</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Content;
