import React, { useState } from "react";

function CategoryFilter({categories}) {
  const [className, setClassName] = useState("")

  function filterCategories(){
    setClassName("selected")
    console.log("it is not changing")
  }

  const newCategory = categories.map((category, index)=> {
    return <button 
    className={className} 
    key={index} 
    onClick={filterCategories}>
      {category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {newCategory}
    </div>
  );
}

export default CategoryFilter;
