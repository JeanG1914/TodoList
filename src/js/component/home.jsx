import React, { useState } from "react";

//include images into your bundle

//create your first component
const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [task , setTask] = useState("");
  const addtask = () => {
    if (task){
      let num = task.length+1;
      let newEntry = {id: num, title: task}
      setTodos([...todos, newEntry])
      setTask("")
    }
  }

  return (
    <div className="container">
      <h1>To do List</h1>
      <ul>
        <li>
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            text="text"
            placeholder="What else you have to do?"
          ></input>
          <button onClick={addtask}>To do</button>
          {todos.map((todos,idx)=> {
            return (
              <div className="col taskBg" key= {todos.id}>
                <div>   </div>
              <span className="index">{idx+1}</span>   
              <span className="task">{todos.title}</span>
              </div>
            )
          })}
      
        </li>
      </ul>
    </div>
  );
};

export default List;
