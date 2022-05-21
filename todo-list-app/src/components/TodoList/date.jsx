const Date = ({ date }) => {
  const { month, day, year } = {
    month: date.toLocaleString("en-US", { month: "long" }),
    day: date.toLocaleString("en-Us", { day: "2-digit" }),
    year: date.getFullYear(),
  };
  return (
    <div className="item-date item">
      <div className="month item-date-item">{month}</div>
      <div className="year item-date-item">{year}</div>
      <div className="day item-date-item">{day}</div>
    </div>
  );
};
export default Date;
