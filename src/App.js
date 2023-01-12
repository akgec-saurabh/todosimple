import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer/InputContainer";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [List, setList] = useState([]);

  const onAddTodo = (prop) => {
    setList((prv) => {
      const newList = [...prv, prop];
      console.log(newList);
      return newList;
    });
  };

  return (
    <div className="App">
      <InputContainer onAddTodo={onAddTodo} />
      <TodoList List={List} />
    </div>
  );
}

export default App;
