import React from "react";

const TodoList = ({ List }) => {
  console.log(List);
  return (
    <div className="todoList">
      {List.map((todo, i) => (
        <div key={i}>{todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
