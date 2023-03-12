import { useRef, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './components/model';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>('');
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setToDo('');
    }
  };


  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
