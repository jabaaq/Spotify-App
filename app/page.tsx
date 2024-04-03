import Image from "next/image";
import styles from "./page.module.scss";
import cn from "classnames";

export default function Home() {
  console.log("Hello world!");
  return (
    <main className={cn(styles.main, { [styles.test]: true })}>
      <h1>Hello world!</h1>
    </main>
  );
}
