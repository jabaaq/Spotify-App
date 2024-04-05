import styles from "./page.module.scss";
import cn from "classnames";
import GetToken from "./getToken";
import spotifyLogo from "../public/Spotify_Logo_CMYK_Black.png";

export default function Home() {
  return (
    <main className={cn(styles.main, { [styles.test]: true })}>
      <div className={cn(styles.login_container, {})}>
        <img src={spotifyLogo.src} alt="Spotify" className={cn(styles.logo)} />
        <GetToken />
      </div>
    </main>
  );
}
