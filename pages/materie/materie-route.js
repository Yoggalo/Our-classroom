import Card from "../components/card";
import Link from "next/link";

export default function Route() {
  return (
    <main>
      <Link href={"arte"}>
        <a>
          <Card title="Arte"></Card>
        </a>
      </Link>

      <Link href={"divina-commedia"}>
        <a>
          <Card title="Divina Commedia"></Card>
        </a>
      </Link>

      <Link href={"filosofia"}>
        <a>
          <Card title="Filosofia"></Card>
        </a>
      </Link>

      <Link href={"informatica"}>
        <a>
          <Card title="Informatica"></Card>
        </a>
      </Link>

      <Link href={"inglese"}>
        <a>
          <Card title="Inglese"></Card>
        </a>
      </Link>

      <Link href={"matematica"}>
        <a>
          <Card title="Matematica"></Card>
        </a>
      </Link>

      <Link href={"religione"}>
        <a>
          <Card title="Religione"></Card>
        </a>
      </Link>

      <Link href={"scienze"}>
        <a>
          <Card title="Scienze"></Card>
        </a>
      </Link>

      <Link href={"scienze-motorie"}>
        <a>
          <Card title="Scienze Motorie"></Card>
        </a>
      </Link>

      <Link href={"storia"}>
        <a>
          <Card title="Storia"></Card>
        </a>
      </Link>
    </main>
  );
}
