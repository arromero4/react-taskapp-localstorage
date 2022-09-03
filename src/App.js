import "./App.css";
import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data)); //converts to javascript
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems)); //converts to string
  }, [taskItems]);


  const cleanTasks = () =>{
    setTaskItems(taskItems.filter( task => !task.done ))
    setShowCompleted(false)
  }

  return (
    <main className="bg-dark vh-100 text-white">
     <Container>
     <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <VisibilityControl
        isChecked = {showCompleted}
        setShowCompleted={(checked) =>  setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />
      
      {showCompleted && (
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}

     </Container>
     
    </main>
  );
}

export default App;
