import React from "react";
import Todo from "./todo";


//step 3: pass a task to the todo component
export default function Todolist({ todoList ,deleteHandler, doneHandler}) {
  return (
    <div className="todoListContainer">
      <h2>todo list </h2>
      {todoList.map((el) => (
        <Todo  task={el}   deleteHandler={deleteHandler}  doneHandler={doneHandler} />
      ))}
    </div>
  );
}
