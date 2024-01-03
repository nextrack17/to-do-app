import React, { createContext, useState, ReactNode } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
});


interface TodoProviderProps {
  children: ReactNode[];
}
//export const TodoProvider: React.FC = ({children}) => {
export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1, 
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
