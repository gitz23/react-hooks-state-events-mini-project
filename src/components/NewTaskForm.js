import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [names, setNames] = useState("")

  console.log(names)
  function onTaskFormSubmit(){
    console.log("hi")
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={names} 
        onChange={(e) => setNames(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => {
          <option value={category}>{category}</option>})}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
