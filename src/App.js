import "./App.css";
import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [taskItems, setTaskItems] = useState([
    { name: "my first task", done: false },
    { name: "my second task", done: false },
    { name: "my third task", done: false },
  ]);

  const createNewTask = (taskName) =>{
    if(!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
    
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((task, i) => (
            <tr key={i}>
              <td>
              {task.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
