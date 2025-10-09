import Link from "next/link";

import Hero from "./components/hero/Hero";

export default async function Home() {
  return (
    <main>
      <h1>Probell Home Page</h1>
      <nav>
        <Link href={"/products"}>Products</Link>
        <Link href={"/disclaimer"}>Disclaimer</Link>
      </nav>
      <div>
        <Hero />
      </div>
    </main>
  );
}
