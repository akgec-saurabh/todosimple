import React, { useRef } from "react";

const InputContainer = ({ onAddTodo }) => {
  const refTodo = useRef(null);
  const addTodoHandler = () => {
    console.log(refTodo.current.value);
    onAddTodo(refTodo.current.value);
    refTodo.current.value = null;
  };
  return (
    <div className="inputConatiner">
      <input ref={refTodo} type="text" />
      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  );
};

export default InputContainer;
