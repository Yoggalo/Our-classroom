import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";
import Card from "./components/card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Our Classroom</title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.mainTitle}>Our Classroom</h1>
      <div className={styles.mainSection}>
        <h1 className={styles.mainSectionTitle}>Eventi</h1>
        <div className={styles.mainSectionPart}>Evento 1</div>
        <div className={styles.mainSectionPart}>Evento 2</div>
        <div className={styles.mainSectionPart}>Evento 3</div>
      </div>
      <div className={styles.mainSection}>
        <h1 className={styles.mainSectionTitle}>Annunci</h1>
        <div className={styles.mainSectionPart}>Annuncio 1</div>
        <div className={styles.mainSectionPart}>Annuncio 2</div>
        <div className={styles.mainSectionPart}>Annuncio 3</div>
      </div>
      <div className={styles.cardContainer}>
      <Link href="/materie/materie-route"><a><Card title="Materie" text="tutti i materiali caricati dagli studenti"/></a></Link>
      <Link href="calendario" ><a><Card title="Calendario" text="consulta il calendario degli eventi"/></a></Link>
      <Card title="Annunci" text="tutte le novità"/>
      </div>
      <div className={styles.mainSection} style={{ width: "99.5vw" }}>
        <h1 className={styles.mainSectionTitle}>Novità</h1>
        <div className={styles.mainSectionPart}>Novità 1</div>
        <div className={styles.mainSectionPart}>Novità 2</div>
        <div className={styles.mainSectionPart}>Novità 3</div>
      </div>
    </div>
  );
}
