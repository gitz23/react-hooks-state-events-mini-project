import React from "react";
import { useState } from "react";

function Task({text, category }) {

  // const [X , setX] = useState("X")

  // function deleteTask(){
  //   onClick({ 
  //     text : ""
  //   })
  // }onClick={deleteTask}

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
