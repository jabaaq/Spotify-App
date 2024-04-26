import cn from "classnames";
// import style from "./RadioButton.module.scss";
import "./RadioButton.scss";

const RadioButtons = (): JSX.Element => {
  return (
    <>
      <input
        type="radio"
        id="lang-1"
        name="lang"
        value="collection"
        className="radio"
        defaultChecked
      />
      <label className="label label-1" htmlFor="lang-1">
        My Collection
      </label>

      <input
        type="radio"
        id="lang-2"
        name="lang"
        value="likes"
        className="radio"
      />
      <label className="label label-2" id="lang-2" htmlFor="lang-2">
        Likes
      </label>
    </>
  );
};

export default RadioButtons;
