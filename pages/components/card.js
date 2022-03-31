import styles from "../../styles/Home.module.css";

export default function Card(props){
  return(
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}