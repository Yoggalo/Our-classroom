import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link'
/*immagine non funge */

/* aggiungere login/user */
/*<Image width="100px" height="100px" src="" alt="non funge" />*/
export default function Layout(props) {
  return (
    <div className={styles.heading}>
      <h1 className={styles.h1}>{props.titolo}</h1>
      <ul className={styles.navbar}>
        <ul className={styles.navbarItem}>Materiali
          <li className={styles.navbarChildItem}>Arte</li>
          <li className={styles.navbarChildItem}>Divina Commedia</li>
          <li className={styles.navbarChildItem}>Filosofia</li>
          <li className={styles.navbarChildItem}>Fisica</li>
          <li className={styles.navbarChildItem}>Informatica</li>
          <li className={styles.navbarChildItem}>Inglese</li>
          <li className={styles.navbarChildItem}>Letteratura</li>
          <li className={styles.navbarChildItem}>Matematica</li>
          <li className={styles.navbarChildItem}>Religione</li>
          <li className={styles.navbarChildItem}>Scienze</li>
          <li className={styles.navbarChildItem}>Scienze Motorie</li>
          <li className={styles.navbarChildItem}>Storia</li>
        </ul>

        <li className={styles.navbarItem}>Calendario</li>
        <li className={styles.navbarItem}>Annunci</li>
        <li className={styles.navbarItem}>Orario</li>
      </ul>
    </div>
  );
}
