import React from "react";
import Task from "../components/Task"
import { useState } from "react";

function TaskList({tasks}) {

  const newTaskList = tasks.map((task)=>{
    return (<Task key={task} text={task.text} category={task.category} />)
  })

  return (
    <div className="tasks">
      {newTaskList}
    </div>
  );
}

export default TaskList;
