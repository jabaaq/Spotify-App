import cn from "classnames";
import style from "./CollectionPage.module.scss";
import RadioButtons from "@/component/RadioButton/RadioButton";

const CollectionPage = (): JSX.Element => {
  return (
    <div className={cn(style.playlist)}>
      <div className={cn(style.radioButtonsContainer)}>
        <RadioButtons />
      </div>
      <h1>PlaylistPage</h1>
      <h1>PlaylistPage</h1>
      <h1>PlaylistPage</h1>
    </div>
  );
};

export default CollectionPage;
