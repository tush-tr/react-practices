import react from "react";
export default () => {
  let result = 0;
  const getRandElement = (array) => {
    let rn = Math.floor(Math.random() * array.length);
    return array[rn];
  };

  const clicked = (e) => {
    let elements = document.querySelectorAll(".dock");
    let rn = Math.floor(Math.random() * 100) + 1;
    e.target.innerHTML = `${rn}`;
    result += rn;
    let randomElement = getRandElement(elements);
    randomElement.style.backgroundColor = "red";
    console.log(result)
  };

  return (
    <div className="dockLine">
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
      <div onClick={clicked} className="dock"></div>
    </div>
  );
};
