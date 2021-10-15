import React from "react";

//step4: display the task

export default function Todo({ task, deleteHandler, doneHandler }) {
  const deleteTodo = () => {
    deleteHandler(task.id);
  };

  const doneTodo = () => {
    doneHandler(task.id);
  };
  return (
    <div className="todoContainer">
      <h3
        className={task.isDone ? "done" : "undone"}
        style={task.isDone ? { backgroundColor: "blue" } : {}}
      >
        {" "}
        {task.text}{" "}
      </h3>
      <div>
        <button onClick={deleteTodo}> delete </button>
        <button onClick={doneTodo}> {task.isDone ? "unDone" : "Done"} </button>
      </div>
    </div>
  );
}
