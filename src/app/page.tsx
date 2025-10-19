import Link from "next/link";

import Hero from "./components/hero/page";

export default async function Home() {
  return (
    <main>
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
