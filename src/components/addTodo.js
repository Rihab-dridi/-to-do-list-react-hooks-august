import React, { useState } from "react";

export default function AddTodo({ addHandler ,setInput,input}) {

  const inputHandler = (e) => {
    setInput(e.target.value);
  };


  const addTodo = () => {
    const newUser = { text:  input , isDone: false, id: Math.random() };
    addHandler(newUser);
    setInput('')
    console.log(newUser);
  };

  return (
    <div className="addTodoContainer">
      <input
        type="text"
        placeholder="add your task here"
        onChange={inputHandler}
        value={input}
      />
      <button onClick={addTodo}> Add </button>
    </div>
  );
}
