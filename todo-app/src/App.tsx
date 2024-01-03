import React from 'react';
import  {TodoProvider}  from './TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css';
import myImage from './forest-3622519_1920.jpg'; // Adjust the path


const App: React.FC = () => {
  // TodoProvider =  
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <div>
      <h1>My Component</h1>
      <img src={myImage} alt="" />
     </div>
      <TodoList />
      <TodoForm />
    </TodoProvider>
  );
};

export default App;

