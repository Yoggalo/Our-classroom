import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/index.png"

/* aggiungere login/user */
export default function Layout(props) {
  return (
    <div className={styles.heading}>
      {/* sistemare Image qui sotto, per togliere il commento vanno 
      anche eliminate le graffe che ha intorno */}
      {/* <Image alt="OurClassroom Logo" src={logo} width={100} height={100} /> */}
      <h1 className={styles.h1}>{props.titolo}</h1>
      <ul className={styles.navbar}>
        <ul className={styles.navbarItem}>
          Materiali
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
