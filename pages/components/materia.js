import styles from "../../styles/Materia.module.css";
import Image from "next/image";
import meet from "../../public/meetlog.png"

export default function Materia() {
  return (
    <main>
      <div className={styles.sidebar}>
        <div className={styles.sidebarElement}>
          <h3>Accedi alla videolezione</h3>
          <Image alt="Vercel logo" src={meet} width={100} height={100} />
          <button>Link</button>
          </div>
        <div className={styles.sidebarElement}>ciao</div>
        <div className={styles.sidebarElement}>belli</div>
        <div className={styles.sidebarElement}>come</div>
        <div className={styles.sidebarElement}>state</div>
      </div>
      <div className={styles.content}></div>
    </main>
  );
}
