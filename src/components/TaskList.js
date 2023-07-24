import React from "react";
import Task from "../components/Task"

function TaskList({tasks}) {

  const newTaskList = tasks.map((task, index)=>{
    return <Task key={index} text={task.text} category={task.category}/>
  })

  return (
    <div className="tasks">
      {newTaskList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
