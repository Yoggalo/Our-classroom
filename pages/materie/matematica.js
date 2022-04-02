import styles from "../../styles/Home.module.css";
import Layout from "../components/layout";
import Materia from "../components/materia";

export default function Home() {

  return (
    <div className={styles.container}>
      <Layout titolo="Matematica">
      </Layout>
      <Materia></Materia>
    </div>
  )
}
