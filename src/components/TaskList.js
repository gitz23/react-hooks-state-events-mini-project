import React from "react";
import Task from "../components/Task"

function TaskList({tasks}) {

  // function deleteTask(){

  // }

  const newTaskList = tasks.map((task)=>{
    return (<li key={task} >
    <Task text={task.text} category={task.category} 
    //onClick={deleteTask}
    /></li>)
  })

  return (
    <div className="tasks">
      {newTaskList}
    </div>
  );
}

export default TaskList;
