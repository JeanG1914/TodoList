import React, { useState } from "react";

//include images into your bundle

//create your first component
const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos , setTodos] = useState([])
  return (
    <div className="container">
      <h1>To do List</h1>
      <ul>
        <li>
			<input 
			onChange={(e) => setInputValue(e.target.value)}
			value={inputValue}
			onKeyPress ={(e)=> {
				if (e.key === "Enter"){ setTodos(todos.concat(inputValue));
			}
			text="text" placeholder="What else you have to do?">
			</input>
		</li>
        <li>feed the cat <i class="fa-sharp fa-solid fa-trash"></i></li>
        <li>clean my room <i class="fa-sharp fa-solid fa-trash"></i></li>
        <li>buy groceries <i class="fa-sharp fa-solid fa-trash"></i></li>
        <li>wash the car <i class="fa-sharp fa-solid fa-trash"></i></li>
        <li>ABC <i class="fa-sharp fa-solid fa-trash"></i></li>
        <li>play video games <i class="fa-sharp fa-solid fa-trash"></i></li>
      </ul>
    </div>
  );
};

export default List;
