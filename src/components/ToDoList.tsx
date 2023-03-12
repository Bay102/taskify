import React from 'react';
import { ToDo } from './model';
import SingleToDo from './SingleToDo';
import './styles.css';

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }:Props) => {
  return <div className="todos">
    {todos.map(todo => (
   <SingleToDo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />
    ))}
  </div>;
};

export default ToDoList;
