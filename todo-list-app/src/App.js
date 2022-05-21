import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import NewTask from "./components/NewTask";
import { useState } from "react";
function App() {
  const tasks = [
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
    { name: "Notes", date: new Date(2021, 2, 23) },
  ];
  const [taskList,setTaskList] = useState(tasks)
  const newTaskHandler = (newTaskData) => {
    
    setTaskList([newTaskData,...taskList])
  };
  return (
    <div className="App">
      <Header />
      <NewTask onAddNewTask={newTaskHandler} />
      <TodoList list={taskList} />
    </div>
  );
}

export default App;
