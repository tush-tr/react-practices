import Form from "./Form";
import "./style.css";
const NewTask = ({ onAddNewTask }) => {
  return <Form onAddTaskData={onAddNewTask} />;
};
export default NewTask;
