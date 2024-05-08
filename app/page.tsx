import styles from "./page.module.scss";
import cn from "classnames";
import GetToken from "./getToken";
import Login from "@/component/Login/Login";
import Spotify from "./spotify/page";

export default function Home() {
  return (
    <main className={cn(styles.main)}>
      <GetToken />
    </main>
  );
}
