// import style from "./Spinner.module.scss";
import "./Spinner.css";

const Spinner = () => {
  const createBars = () => {
    let barsLength: number[] = [];
    for (let i = 1; i <= 9; i++) {
      barsLength.push(i);
    }
    return barsLength;
  };

  return (
    <div className="center">
      {createBars().map((item) => (
        <div className="wave" key={item}></div>
      ))}
    </div>
  );
};

export default Spinner;
