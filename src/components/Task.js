import React from "react";
import { useState } from "react";

function Task({text, category, key}) {

  const [oldTasks, setOldTask] =  useState({text, category})
  console.log({text, category})

  function deleteTask(key){
    const newlistArray = oldTasks.filter((task)=> task.key !== key);
      setOldTask(newlistArray);
    }
  

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={() => deleteTask(key)}>X</button>
    </div>
  );
}

export default Task;
