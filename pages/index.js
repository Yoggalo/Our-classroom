import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Our Classroom</title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Our Classroom</h1>
    </div>
  );
}
