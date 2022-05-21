import TaskList from "./List";
import "./style.css";
const TodoList = ({ list,onDeleteHandler }) => {
  return <TaskList list={list} deleteHandler={onDeleteHandler} />;
};
export default TodoList;
