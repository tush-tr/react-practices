import ListItem from "./ListItem";
const TaskList = ({ list }) => {
  return (
    <div className="task-list-wrapper">
      {list.map(({ name, date }) => (
        <ListItem taskName={name} date={date} />
      ))}
    </div>
  );
};
export default TaskList;
