import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>Probell Home Page</h1>
      <nav>
        <Link href={"/products"}>Products</Link>
        <Link href={"/disclaimer"}>Disclaimer</Link>
      </nav>
    </main>
  );
}
