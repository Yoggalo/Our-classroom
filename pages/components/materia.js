import styles from "../../styles/Materia.module.css";
import Image from "next/image";
import meet from "../../public/meetlog.png";


export default function Materia() {
  return (
    <main>
      <div className={styles.sidebar}>
        <div className={styles.sidebarElement}>
          <h3>Accedi alla videolezione</h3>
          <button className={styles.button}>Link</button>
          <Image alt="Meet logo" src={meet} width={100} height={100} />
        </div>
        <div className={styles.sidebarElement}>ciao</div>
        <div className={styles.sidebarElement}>belli</div>
        <div className={styles.sidebarElement}>come</div>
        <div className={styles.sidebarElement}>state</div>
      </div>
      <div className={styles.content}>

        <button className={styles.button}> Nuovo Materiale</button>
        <div className={styles.contentElement}>
          <h2 className={styles.contentElementTitle}>Titolo Materiale</h2>
          <p className={styles.contentElementDescription}>Descrizione</p>
        </div>
        <div className={styles.contentElement}>
          <h2 className={styles.contentElementTitle}>Titolo Materiale</h2>
          <p className={styles.contentElementDescription}>Descrizione</p>
        </div>
        <div className={styles.contentElement}>
          <h2 className={styles.contentElementTitle}>Titolo Materiale</h2>
          <p className={styles.contentElementDescription}>Descrizione</p>
        </div>
      </div>
    </main>
  );
}
