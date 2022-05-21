import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import NewTask from "./components/NewTask";
import { useState } from "react";
function App() {
  const [taskList, setTaskList] = useState([]);
  const newTaskHandler = (newTaskData) => {
    setTaskList([newTaskData, ...taskList]);
  };
  const deleteHandler = (deletionId) => {
    const deletionAfterList = taskList.filter((task) => task.id !== deletionId);
    setTaskList(deletionAfterList);
  };
  return (
    <div className="App">
      <Header />
      <NewTask onAddNewTask={newTaskHandler} />
      <TodoList list={taskList} onDeleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
