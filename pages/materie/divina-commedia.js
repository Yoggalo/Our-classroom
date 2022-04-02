import styles from "../../styles/Home.module.css";
import Layout from "../components/layout";
import Materia from "../components/materia";

export default function Home() {

  return (
    <div className={styles.container}>
      <Layout titolo="Divina Commedia">
      </Layout>
      <Materia></Materia>
    </div>
  )
}
