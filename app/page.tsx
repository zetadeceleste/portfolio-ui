import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Site under construction</h1>
        <p>Follow me on <a href="https://github.com/zetadeceleste">Github</a> ;-)</p>
      </div>
    </main>
  );
}
