import React, { useState } from "react";

//include images into your bundle

//create your first component
const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>To do List</h1>
      <ul>
        <li>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
              }
            }}
            text="text"
            placeholder="What else you have to do?"
          ></input>
        </li>
      </ul>
    </div>
  );
};

export default List;
