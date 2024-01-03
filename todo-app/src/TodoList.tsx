import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList: React.FC = () => {
  const { todos, toggleTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

