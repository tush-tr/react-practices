import "./listitem.css";
import Date from "./date";
const ListItem = ({ date, taskName, id,deleteHandler }) => {
  const itemDeleteHandler = (event) => {
    deleteHandler(id)
  };
  return (
    <div className="list-item">
      <div className="task-name item">{taskName}</div>
      <Date date={date} />
      <button
        onClick={itemDeleteHandler}
        type="submit"
        className="item delete-button"
      >
        Delete
      </button>
    </div>
  );
};
export default ListItem;
