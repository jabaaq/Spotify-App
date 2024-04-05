import styles from "./page.module.scss";
import cn from "classnames";
import GetToken from "./getToken";

export default function Home() {
  return (
    <main className={cn(styles.main, { [styles.test]: true })}>
      <h1>Hello world!</h1>
      <GetToken />
    </main>
  );
}
