import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setToDo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur()
      }}
      className="input"
      action=""
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
        className="input_box"
        type="input"
        placeholder="Enter a task"
      />
      <button className="input_submit" type="submit">
        Enter
      </button>
    </form>
  );
};

export default InputField;
