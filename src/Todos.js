import React from 'react';
import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    todos.map((todo, i) => {
      return <Todo key={i} todo={todo} />
    })
  );
};

export default Todos;