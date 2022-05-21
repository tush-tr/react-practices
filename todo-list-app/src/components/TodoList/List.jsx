import ListItem from "./ListItem";
const TaskList = ({ list,deleteHandler }) => {
  return (
    <div className="task-list-wrapper">
      {list.map(({ name, date,key,id }) => (
        <ListItem taskName={name} date={date} key={key} id={id} deleteHandler={deleteHandler}/>
      ))}
    </div>
  );
};
export default TaskList;
