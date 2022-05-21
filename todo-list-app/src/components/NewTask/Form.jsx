import { useState } from "react";

const Form = ({ onAddTaskData }) => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const taskNameHandler = (event) => {
    setTaskName(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: taskName,
      date: new Date(date),
      key: Math.random().toString(),
      id: Math.random().toString(),
    };
    onAddTaskData(data);
  };

  return (
    <form action="/" className="new-task-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Task Name"
        onChange={taskNameHandler}
      />
      <input type="date" onChange={dateHandler} />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default Form;
