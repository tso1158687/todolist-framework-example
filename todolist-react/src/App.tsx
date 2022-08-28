import React from 'react';

import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { Todo } from './type/todo.type';
function App() {
  const defaultTodoList: Todo[] = [
    {
      content: '吃飯',
      id: 1,
      completed: false,
    },
    {
      content: '睡覺',
      id: 2,
      completed: false,
    },
  ];
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
