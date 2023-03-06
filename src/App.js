import "./App.css";
import React, {useState} from 'react';

function App() {
  const [toDoList, setToDoList] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ]);

  const [task, setTask] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");

  function saveNewToDo(event) {
    event.preventDefault();
    const newToDo = {
      name: task, priority: taskPriority,
    };
    const newToDoList = [...toDoList, newToDo];
    setToDoList(newToDoList);
    setTask("");
  }

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  function handlePriorityChange(event) {
    setTaskPriority(event.target.value);
    console.log(event.target.value);
  }
  
  const listTasks = toDoList.map((item, index) => (
    <li key={index} className={item.priority}>
      <span>{item.name}</span>
    </li>
  ));

  return (
    <div className="App">
      <h1>ToDo's</h1>

      <form onSubmit={saveNewToDo}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          id="high"
          name="priority"
          value="high"
          onChange={handlePriorityChange}
        />
        <label htmlFor="high">High</label>
        <input
          type="radio"
          id="low"
          name="priority"
          value="low"
          onChange={handlePriorityChange}
          defaultChecked
        />
        <label htmlFor="low">Low</label>
        <input type="submit" value="Save Item"/>
      </form>

      <ul>
        {listTasks}
      </ul>
      
    </div>
  );
}

export default App;
